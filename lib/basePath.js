// Mirrors the basePath set in next.config.js. Anything referencing a file in
// /public (next/image src, plain <img> tags, manual fetches) needs this
// prepended by hand — basePath/assetPrefix only rewrite paths that go
// through Next's own bundler (webpack-emitted CSS/JS), not plain public
// asset strings.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
