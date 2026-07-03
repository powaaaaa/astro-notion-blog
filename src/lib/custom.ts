// このブログ独自のカスタマイズを集約するファイル。
// upstream (astro-notion-blog) の lib ファイルはなるべく変更せず、
// 差し替えたい関数はここに定義して、自作のページ/コンポーネントからはこちらを import する。
import { BASE_PATH } from '../server-constants'
import { pathJoin } from './utils'

// upstream の getTagLink は /posts/tag/[tag]。
// このブログではサイトマップ(デザイン 7a)に合わせて /tags/[tag] を使う。
export const getTagLink = (tag: string) => {
  return pathJoin(BASE_PATH, `/tags/${encodeURIComponent(tag)}`)
}

// 一覧・記事詳細で使う YYYY-MM-DD 形式の日付フォーマッタ
export const formatDate = (date: string) => {
  const d = new Date(date)
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
}
