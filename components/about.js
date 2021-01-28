import Container from './container'
import Link from 'next/link'
import { EXAMPLE_PATH } from '../lib/constants'

export default function About() {
  return (
    <about>
      <h1 className="my-8 text-3xl md:text-4xl font-bold tracking-tighter leading-tight">
        About
      </h1>
      <h2>このブログについて</h2>
      <p>
        文章を書く習慣をつけるための場所で、自分のために書いています。おそらくは
        <ul>
          <li>競プロ系</li>
          <li>計量経済学・機械学習で勉強したこと</li>
          <li>読んだ本</li>
          <li>日々考えていること</li>
        </ul>
        などを書いていくつもりです。
      </p>

## 自己紹介
大学学部では物理を専攻して、大学院では量子情報の研究をしていました。命からがら博士号を取得し、社会人になってはや3年目です。

## 趣味
- 料理
- 読書
- カメラ
- ランニング（膝故障中）
- 深夜ラジオ


なお、実名が知りたかったら、twitterでDMでも下さい。
  
    </about>
  )
}
