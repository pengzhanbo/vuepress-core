/**
 * For a give URL, remove the origin and the site base to get the route path
 */
export const resolveRoutePathFromUrl = (url: string, base = '/'): string => {
  const pathname = url
    // remove url origin
    .replace(/^(?:https?:)?\/\/[^/]*/, '')

  // remove site base
  return pathname.startsWith(base)
    ? `/${pathname.slice(base.length)}`
    : pathname
}
