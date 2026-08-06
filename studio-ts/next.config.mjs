import rehypeShiki from '@leafac/rehype-shiki'
import nextMDX from '@next/mdx'
import { Parser } from 'acorn'
import jsx from 'acorn-jsx'
import escapeStringRegexp from 'escape-string-regexp'
import * as path from 'path'
import { recmaImportImages } from 'recma-import-images'
import remarkGfm from 'remark-gfm'
import { remarkRehypeWrap } from 'remark-rehype-wrap'
import rehypeUnwrapImages from 'rehype-unwrap-images'
import shiki from 'shiki'
import { unifiedConditional } from 'unified-conditional'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  async redirects() {
    return [
      // Canonicalize the Vercel preview domain — keep it out of the index.
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'tidalpoint.vercel.app' }],
        destination: 'https://tidalpointpartners.com/:path*',
        permanent: true,
      },
      // www → apex — tidalpointpartners.com is the canonical domain.
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.tidalpointpartners.com' }],
        destination: 'https://tidalpointpartners.com/:path*',
        permanent: true,
      },
      // Legacy three-service routes → the consolidated /services page.
      {
        source: '/services/revenue-growth',
        destination: '/services#growth',
        permanent: true,
      },
      {
        source: '/services/ceo-coaching',
        destination: '/services#team',
        permanent: true,
      },
      {
        source: '/services/performance-planning',
        destination: '/services#operations',
        permanent: true,
      },
    ]
  },
}

function remarkMDXLayout(source, metaName) {
  let parser = Parser.extend(jsx())
  let parseOptions = { ecmaVersion: 'latest', sourceType: 'module' }

  return (tree) => {
    let imp = `import _Layout from '${source}'`
    let exp = `export default function Layout(props) {
      return <_Layout {...props} ${metaName}={${metaName}} />
    }`

    tree.children.push(
      {
        type: 'mdxjsEsm',
        value: imp,
        data: { estree: parser.parse(imp, parseOptions) },
      },
      {
        type: 'mdxjsEsm',
        value: exp,
        data: { estree: parser.parse(exp, parseOptions) },
      },
    )
  }
}

export default async function config() {
  let highlighter = await shiki.getHighlighter({
    theme: 'css-variables',
  })

  let withMDX = nextMDX({
    extension: /\.mdx$/,
    options: {
      recmaPlugins: [recmaImportImages],
      rehypePlugins: [
        [rehypeShiki, { highlighter }],
        rehypeUnwrapImages,
        [
          remarkRehypeWrap,
          {
            node: { type: 'mdxJsxFlowElement', name: 'Typography' },
            start: ':root > :not(mdxJsxFlowElement)',
            end: ':root > mdxJsxFlowElement',
          },
        ],
      ],
      remarkPlugins: [
        remarkGfm,
        [
          unifiedConditional,
          [
            new RegExp(`^${escapeStringRegexp(path.resolve('src/app/articles'))}`),
            [[remarkMDXLayout, '@/app/articles/wrapper', 'article']],
          ],
          [
            new RegExp(`^${escapeStringRegexp(path.resolve('src/app/work'))}`),
            [[remarkMDXLayout, '@/app/work/wrapper', 'caseStudy']],
          ],
          [
            new RegExp(`^${escapeStringRegexp(path.resolve('src/app/services'))}`),
            [[remarkMDXLayout, '@/app/services/wrapper', 'service']],
          ],
          [
            new RegExp(`^${escapeStringRegexp(path.resolve('src/app/clients'))}`),
            [[remarkMDXLayout, '@/app/clients/wrapper', 'clientProfile']],
          ],
        ],
      ],
    },
  })

  return withMDX(nextConfig)
}
