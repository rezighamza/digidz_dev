c = open('D:/Projects/digidz_dev/src/app/[locale]/layout.tsx', 'r').read()
c = c.replace('export function generateStaticParams', 'export const dynamic = "force-dynamic";\n// export function generateStaticParams')
open('D:/Projects/digidz_dev/src/app/[locale]/layout.tsx', 'w').write(c)
