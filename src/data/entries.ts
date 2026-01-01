import { parse } from 'discord-markdown-parser'

export type AttachmentType = 'image' | 'audio' | 'video'

export interface Attachment {
  type: AttachmentType;
  file: string;
  isUnbound?: boolean;
}

export interface EntryData {
  userID: string;
  data: (string | Attachment[])[];
}

export interface ParsedEntryData {
  userID: string;
  data: (ReturnType<typeof parse> | Attachment[])[];
}

export interface Entry {
  annoucement?: EntryData;
  en?: EntryData;
  jp?: EntryData;
  day?: number;
}

export interface ParsedEntry {
  annoucement?: ParsedEntryData;
  en?: ParsedEntryData;
  jp?: ParsedEntryData;
  day?: number;
}

const entries: Entry[] = [
  {
    day: 1,
    jp: {
      userID: '214705183010193408',
      data: [`# __アドベント・カレンダー2025年12月1日__

この物語はフィクションであり、実在の物とは一切関係がありません。11月に見たハリーウッドの「プレデター」映画シリーズと、[中国の春節の由来](<https://www.allchinainfo.com/jijie/943/>)からインスピレーションを受けてこの物語を思い浮かべました。

某国のある村には500年間以上にわたる、悍ましい伝統がある。この異質な伝統とその由来について語らせてもらう。

昔々、レイミアというコモドオオトカゲの頭と豹の体をした獣がいた。その獣は、毎年の12月1日の夜10時に必ず、村を襲いに来ていた。村に音連れるなり、大きく暴れ出していた。村人たちの家を壊しては、畑の作物を荒らし、出くわす人を毒牙による裂傷で弱まらせて食べる。逃げようとする者も許さんと、豹の脚力で捕まえて食べていた。村人たちは幾度となくレイミアの暴行に争ってみたものの、歯が立たない強敵だった。村人全員で何を試すも、無駄骨折に終わり、その夜の死者数が100人に及ぶ年もあった。

対策に困った村人たちは、長期戦に切り替えた。15歳の子供にレイミアを倒すほどの武芸を修めさせようと試みた。よって、ある年の4月に、グラビが咲き始めてすぐに、ちょうど15歳を迎えた4人の子供が、遥か遠くの名剣士のもとへと修行に出される。その名剣士のことは、数年前に商売人から聞かされた。

修行を終えるまでの被害はやむを得ぬと、苦渋の決断をした当時の村長は、子供たちに3年間の猶予を与えた。3年後になっても戻らない場合は、死んだとみなされ、遺体がなくても他の死者とともに弔われる旨を通告する。

初めての長旅をする子供たちは、道中様々な苦難を味わい、あまりさえ仲間を1人亡くすことにまでなってしまう。仲間の死を悔やみ、弔いたくも、今はレイミア退治を優先せねばと、仲間を森の中に置いて先に進む。そして、目的地にたどり着くころには数カ月が経った。名剣士に村からの供物を差し上げて剣技の教えを乞うも、驚くほどにすんなりと受諾される。名剣士といえど、直近は弟子になりたいものがおらず、長年かけて培った剣技の能力を次世代に伝授したかったとのこと。

名剣士から3年間かけてあらゆる武芸を授かった18歳の3人は剣士として故郷に向かう。11月中旬に帰参した3人がレイミア退治の準備にかかり、いくつもの細工と罠を仕掛けて12月1日の夜を迎える。今宵に向けて3人の剣士以外の者は全員が村をやや離れた場所に移動する。真っ暗なこの夜に無人の村を覆っていた静寂が、レイミアの咆哮によって破られる。レイミアにとって、無人の村が初めての景色となり困惑し、咆哮を止まない。離れた場所の村人がレイミアの怒りを察知し、胴震いするものまでいるくらいにひやひやしながら待つ。

剣士たちは、あるあかしみえ用意した油にまみれた空き家に火をつけ、レイミアを煽ってみる。しなやかな体を動かし空き家に向かって飛びかかったその速さは尋常じゃない。おまけに方向をころころ変えながら村の道路を舞ってゆく。常人ならその変則的な動きについていけず混乱するが、剣士たちはこの速さに慣れている。修行の成果を見せるべく、2人の剣士がレイミアがかけてゆく道の左右に細糸を持ち上げる。細糸をレイミアの体に引っ掛けて地面に倒す狙いだが、想像を絶する勢いに負けてしまい、レイミアと同じ方角に向かい2人も倒れる。こういう場合も想定内か、すぐに立ち上がってレイミアの前足を2本とも捕まえて左右に力いっぱい引っ張る。状況を飲み込んだレイミアはこっぴどく暴れてみるが、捕まった両足が微動だにしない。村人も状況を察し、状況を自分の目で確かめようとかけてくる。3人目の剣士も到着し、鞘から刀を抜いて一切りでレイミアの体を切断する。村人は大喜びで、レイミアの骸を担いで村中をはしゃぎまわる。

以降、3人の剣士は「三守者（ミシュシャ）」と呼ばれ、村のあらゆる問題のことで頼られるようになる。村長の息子の三守者に対する強い嫉妬と、一刻も早く村長になりたいという気持ちが相まって、彼はある夜に眠っていた三守者を焼殺し、自分の親を毒殺する。三守者を失い村長も失った村人たちは、絶望の淵に沈んでしまいそうなときに、元村長の息子が自分が新たな村長になると申し出る。特に反対されず村長になった彼は、村人の不安を拭いたく、新たな伝統を始める。

三守者がいない今も、仮にもう一匹が存在しても、村に近づかないようにと、人柱を捧げると通告する。レイミアが退治された翌年の12月1日、新しい村長に選ばれた1人の20代の男性が黄色い地の上に黒斑で体中を塗られ、レイミアの頭に似た仮面を被っていた。村中を踊り回り、レイミアの声を真似ようとしていたが、途中で何度も泣き声を抑えていることが誰にも明らかだった。こうして数時間踊らされた中、何度も鞭を打たれた。しまいには、レイミア退治を再現し、逃げることを許されなかったにもかかわらず、2人の村人が生贄を軽く押さえつけ、村長が刀で生贄を斬り殺した。その後は「レイミアめ、見たか？この村に来ればお前も同じように斬ってやる！」と言わんばかりに、盛大な宴を張った。無論、とっくに退治されたレイミアが再び音連れるわけもなく、村は安全の日々を過ごしていった。そのことを彼が始めた伝統のおかげだと主張し、来年、再来年と延々と続けて、この歪な伝統が村の文化になってしまった。

この文化は500年後に壊されることになるが、その話はまた今度に…

**この話には、雰囲気を出すために以下の古風な言葉を使ってみました：**
音連れる → 訪れる
あまりさえ → あまつさえ
あるあかしみえ → あらかじめ`],
    },
    en: {
      userID: '1198839768994283610',
      data: [`**2025-12-01**

This year I asked myself the question, “Am I living a life I admire?” 

I’ve worked as an agency copywriter for years and things had been stagnant for a while. My personal life wasn’t much better since I hadn’t been challenging myself and growing. Amid this realisation, I met someone new who was very different to me. As we became closer, I got inspired by their spontaneity and curious nature and wondered if I really needed to navigate life so cautiously like I had for the past two or three years. 

“You’ll be good at whatever you decide to do,” he told me. 

I was bored of my routine and dissatisfied with the advertising landscape, so I applied for a university course in dietetics (I’ll find out next week if I get accepted into the university course). I also wanted to encourage myself to let go and go with the flow more, and that led to me enrolling in improv and acting classes. Even though I felt uncomfortable being confronted with many new faces and foreign content, I still had fun and felt very fulfilled. 

Moving forward, I don’t want to forget that feeling associated with self-growth, but I don’t think I will – not with my renewed focus and that special person by my side.`],
    }
  },
  {
    day: 2,
    jp: {
      userID: '175990649361793024',
      data: [
        `メリクリ。今年のアドカレ投稿では，私自身がずっと書きたかった，少し重いテーマの作品をお届けします。

この作品は、父を亡くした男性が過去を振り返りながら、失ったものに気づく物語です。時間軸を交錯させたのは、彼の選択とその結果を読者に実感してほしかったからです。

作中で繰り返し登場する「龍井茶」は，私にとって単なる小道具ではなく，主人公が過去を振り返る際の尺度となるものです。その香りを主人公が感じられるかどうかで、彼の心の状態を表現しました。

### 構造について
本文は**挿入法**によって構成されています。**太字**の部分は現在の時間軸で，電話の通知から始まり，病院，実家の茶畑へと続く，現実の感情と行動の流れを示しています。一方，\`細字\`の部分は過去の回想で，数十年前から十年前までの，家族を顧みず成功を追い求めた主人公の姿を断片的に描いています。

この二つの時間軸を交互に配置することで，\`過去\`の選択が**現在**の後悔や無力感に影響を与え、主人公の心の変化がより鮮明になります。

### 龍井茶について
このお茶は，主人公の心の変化を映す鏡として仕掛けました。回想の中では，茶は単なる田舎の産物にすぎず，彼は父の気持ちにも鈍感でした。しかし現在，病室でその香りが分からなくなった時，彼は自分が大切なものに無関心だったことに気づきます。
茶が象徴するのは，「失った時間」と，「取り戻そうとする記憶」です。最後の茶畑の場面は，彼がようやくその感覚を取り戻す瞬間として書きました。

この物語は，家族より成功を優先した男が，喪失を経て大切なものに少しずつ気付く過程を描いています。単なる後悔の物語ではなく，静かな気づきの物語として楽しんでいただければと思います。

最後に，早いご挨拶ではありますが，良いクリスマスをお迎えください。お読みいただき，ありがとうございました。`,
        `# 龍井　如月あやみ　令和七年十二月二日

## 零

    **ルルー。
    「はい，如月でございます。」
    『父上，行きましたの。』

    正月の寒さを浴びた耳に届くその一言は，我が心に宿っていた無形の棺に，最後の釘を打つ。
    最初で最後に父が残してくれたものは四つ——
    苦笑。
    交々到る万感[1]の間を縫う様に引いていく，脈搏の糸。
    それに，寂滅の瞬間に吐かれた虚ろな息。
    哭泣。

    あの日から，「ご愁傷様」といった中身もなき挨拶は幾許も騒ぎ始める。別に良かろう。所詮，生老病死は度し難し。
    新喪[2]の哀しみよりも一段と痛く感じるのは，指の間から零れ落ちる砂の如く，流れ去んぬる[3]素晴らしき年月への心残り。
    不肖の子は漸く時間の冷酷を感じられる様になり，遅蒔きながら身悶えをしていく。**

## 壱

    **三，四十年前のあの日の事を思い起こす。**
\`　　瞼を開けて窓を通して見遣ると，父が畑仕事に没頭していた。\`

    **それは余りにも輝かしい後ろ姿だった。今病褥に寝ている皺だらけの顔，傴僂[4]の金火箸[5]と同じ人だと私にはどうも信じられない。
    仮に信じられたとしても一体どんなお得があると言うのだ。惜しむ物にできる父との思い出なども，薬にする程しかなくて。**

\`　　父はただ黙々と，お茶刈り作業に取り組んでいた。翌週は清明だったので，集められていたのは「明前龍井[6]」——味も香りも超一流と言われる，希少な銘茶だった。
そんな好期だったのに，私は一切手伝おうともしなかった。心急く若者は自ら高しとした夢などを膨らませんが為に，事しも有れなんと天倫[7]を怠り，共に暮らせる月日ごと軽んじ，無駄に過ぎ去らせていたのだった。
が，それに対し父は逆に何の不満も口にしなかった。夢さえ持っているのならば追えば良いと，天賦の才を粗末にし，ただの貧農に成り果ててはいけないと，ずっと考えていたのだった。\`

    **他方，病褥の横に座っている私は軽弾みにそれに同調する勇気は微塵もない。
    こちらは少しの俗っぽさもなくきちんとした身なりなのに，そちらの死色の病衣よりも暗く見える。袞衣の唐紅[8]であれ，繍裳[9]の山吹[10]であれ，臨命終時，ただの泥棒なのだ。無用者ばかりの会議室の中や，殴り書きばかりの黒板の前で，そういった色彩を図って全人生を賭ける愚か者たちの春と秋を段々盗んでいく，情けのない泥棒。
    宮室がどれほど厳麗だとしても，帝が愚主なら何もかもただの瓦鶏陶犬に過ぎないではないだろうか。
    「時間の冷酷」とは，矢張りこの潸然たる涙に溶ける物ではない。**
    
## 弐

    **また，十載ぶりに家に帰った廿年前のあの日の事を思い起こす。**
\`　　顔中に皺が刻まれていたが，あの笑みは消えることなく太陽が如く燦爛なままだった。目元の皺が笑顔に覆い隠されていたせいか，なんと私は父の体の老化に全く気付いていなかった。
    時刻は一二時を回っている。
    促膝[11]してじっくり語り合う段階を飛ばしながら，龍井を一杯半注いだ。我々は無言[12]に黙し[13]，ただお茶を一緒に飲んでいるだけだった。まるで赤の他人かの様に，言葉では表せない凍った糸で結ばれているかの様に。
    先手を取って沈黙を打ち破ったのは父。
    「ちゅうか，会社，上手う行っとる？吉報なんかはな，全然持ってきとらんくて。」
    「会社」という言葉を聞いた瞬間，重荷を卸したかの様にこれまでむっつりした顔が清々しくなった。自慢の怪獣が桎梏を脱し，滔々と自分の「成功」を衒かし[14]始めた――
    父への感激などには一言も触れずに。
    彼がもしいなかったら当時の私も存在するはずがなかっただろうに。
    しかし生憎，私の人生に彼は本当にいなかったのだ。それは別段悲惨な事が起こったのだというわけでもない。確かに毎日毎日，同じ屋根の下で暮らしていたので。どちらかといえば全部私自らの選択だった。自恣，逐鹿，尊厳を選び，幸福を遽しく無知な奮闘に交換し，時間を鳥の囀りの間に逃げ去らせてしまった私の自縄自縛で，正に暑さ忘れて陰忘るそのものだ。\`

    **龍井の香りは依然としてこの病室に漂っているが，感知すらできない。馴染みがなさすぎて，どれほど胸が痛く締め付けられていても，どれほど頬を水玉が無闇に流れていても，あの嗅いだことのない香りは私にとってやけに不案内だ。辛うじて弁識できる物は，恐らく父の加齢臭くらいかな。
    「会社」「成功」とかいうのは，天井板の真ん中に設置されている電球から発散する微弱なる光と同じく，飽く迄偽りの照明で，太陽光の様には見えない。その色は人間性の白と最早正反対になっている。明るさは言わずもがな，父の笑顔と比べ物にもならない。
    もしこんな人工的な灯光の下で廿年前のと同じ様な質問をされたら，多分感極まって嗚咽を漏らし，答えることさえ出来なくなってしまうだろう。
    しかし畢竟ずるに，「時間の冷酷」なる物は，嗚咽で訴えられる物でもない。**

## 参

    **また，十年前の事を。**
\`　　バブルの崩壊と共に，我が会社は倒産の危機に瀕していた。散々の為体[15]で家に一度帰ることを余儀無くされた私も目の周りの皺で父に揶揄われる様な老態になっていた。
    父は相も変わらず龍井を斟いでくれたが，商界で不遇を受けた私は機嫌が悪く，内に秘めていた苦しみを二言三言だけ託ったら直ぐに椅子を難儀そうに立ち去った。
    ドアを開けると，後ろからドサッと音が駆けつけてきた。突如として，この鳩も行きやしない畑中に響き渡った，余りにも恐ろしい音が。
    雷公も私の事を嘲笑っているのだろうか。
    否，それは誰かがばたりと倒れ込む音だった。
    振り返って見ると，父が恰も吊っていた糸を切られた人形の様に，沃土の埃を雲の如く起こしながら崩れ落ちていた。手には蕃茄一個。脇の間にも筲[16]からぱらぱらと転がり出てきたまた二，三十個。
    雪と墨の様な勢いで揚げた二種の呼声と伴い，速さの違った二種の跫音。
    「パパ……。」「パパ！！」
    泥塗れのその躯体から何の反応も返ってこなかった。\`

    **その日から，父はもう耕作には行けなくなり，蕃茄も全部凋れ，緑の葉まで「死めいた」冥い黄色に染まってしまっていた。病室の死色と等しい「死らしさ」だった。
    父と一緒に過ごせる時間は，花期と同様に，一たび去ってしまえば再び戻ってこない物だった。その様な「時間」がやってきたことが抑々一度もないと言うべきか，それとも確実に何度かは訪れていたにも不係[17]，その度に自尊心に餌を遣ることに酖溺[18]しがちな私に都市まで逃げられ，到来を告げる機会も奪われていた，と言うべきか。
    今更その真相はもうどうせ知る由もないだろう。

    筲って，隙間だらけなんだ。農家出身でありながら天命を知るに至って漸く初めて気付いた。
    詳しくは余り知らないが，「時間の冷酷」を筲に注ぎ入れようとしたら，きっとすぐ底から漏れて出ていってしまい，大変な事になるだろう。**`,
        `## 肆

    **十年に十年，廿年に廿年……とうとう今日が来た。私も螻蛄になる[19]今日が。
    会社というのは最早存在しなくなってしまっているが，それだけは良き事としか考えられない。贅沢三昧の生活に目を眩まされた息子に見捨てられ，雲霄[20]と共に飜翥[21]し去った父の惨況こそ気遣わしく思える。
    私の手背に新たに附いた皺は心電図の穏やかな波形と相反する様に見える。
    襁褓[22]の頃の「皺」というのは皮膚の木目で，病褥に伏す頃の「皺」というのは波形の起伏。我々人類が生きる命は，まるで皺の出現と消失で織り成す孤島を結ぶ橋の様な物だ。
    「最も素晴らしき年月」，「最も傷ましき年月」というのも，「平滑」と「凸凹」が稀にしか併存せぬこの二つの刹那を措いてあるまい。謂わば全ての「始まり」と「終わり」，命の「舳[23]」と「艫[24]」だ。
    私にとっては，阿から吽まで[25]の時間は余りにも速く過ぎていったが，父の視点では四十年という，全く偽りのない，喜怒哀楽の揃った，赤裸々な春夏秋冬だった。
    驚くべきことに，「素晴らしき年月」とは，一見遥か遠く離れている様だったが，実際はずっと目と鼻の先にいたのだった。ずっと息子を畑に誘いたがっていた父は，私が機会を掴むのを待ちに待っていたからこそ，いつも龍井を酌んでくれたり，蕃茄を捥ぎ取ってくれたりしていたのだった。
    しかしながら，あの時の「筲」も，今の「嗚咽」も，「時間の冷酷」という千古不易の物を載せられるものではない。その冷酷は，私が知らないのを良い事に，筲の隙間の間から零れ落ちていて，今日になって丁度最後の一滴まで完全に漏れてしまっていた。今更ながらに私はやっとそれに気づいたが，黄葉はもう疾っくに紛々と舞い落ちてしまい，赤楽[26]に優しく抱き留められ，円やかな甘みを帯びたお茶になり，苑香[27]と変身して無臭の病室に温かく漂い渡っていた。**

## 伍

    **清明だ。龍井の収穫期も又もや近づいてくる。
    目を開いて私の茶摘み姿を見た倅が，部屋を出て竹籠を身軽に拾い上げる。
    「俺が遣ろう。」
    私は鋤鍬を下に置き，愛想良く莞爾み[28]始め，倅を強く抱き締める。気持ちは余りにも複雑だ。
    「ええ。後はな，お爺ちゃんとこにも行ってこや。今日の一番ええお茶も，持ってくの忘れやんとってな！」

    若者よ。胸懐と呼ばれる湯呑で時間を聢と[29]盛っていなさい。狡賢くして冷酷なる時間に淙々[30]と流し尽くされ，有るべき祝福も手に順って牽かれる[31]こと勿れ。そうしたら君もきっと，時間という銘茶がゆっくりと溶け出す度にその湯呑より漂ってくる馥郁たる香りを感じる機会があったことを，某年の清明の頃に，悦びと與に思い返せるだろう。**
    
## 注釈

[[1] 万感交到るの引用。](<https://kotobank.jp/word/%E4%B8%87%E6%84%9F%E4%BA%A4%E5%88%B0%E3%82%8B-606174>)
[[2] にいも](<https://kotobank.jp/word/%E6%96%B0%E5%96%AA-590958>)
[[3] さんぬる](<https://kotobank.jp/word/%E5%8E%BB%E3%82%93%E3%81%AC%E3%82%8B-514515>)
[[4] くぐせ](<https://kotobank.jp/word/%E5%B1%88%E8%83%8C-482884>)
[[5] かなひばし](<https://kotobank.jp/word/%E9%87%91%E7%81%AB%E7%AE%B8-465154>)
[[6] ミンチェンロンジン](<https://ja.wikipedia.org/wiki/%E9%BE%8D%E4%BA%95%E8%8C%B6#%E7%AD%89%E7%B4%9A%E3%81%A8%E5%90%8D%E7%A7%B0>)
[[7] てんりん：親子・兄弟関係のたとえ。](<https://kotobank.jp/word/%E5%A4%A9%E5%80%AB-579109>)
[[8] からくれない：鮮やかな濃い紅の色。また，「唐紅の涙」とは非常に悲しい時に流す涙の意。](<https://kotobank.jp/word/%E5%94%90%E7%B4%85-467325>)
[[9] 袞衣繍裳（こんえしゅうしょう）とは，詩経に登場した，地位の高い人が着る美しい服のたとえ。](<http://www.1-em.net/sampo/sikyo/sikyouA.htm#%E4%BC%90%E6%9F%AF%E4%BA%8C%E7%AB%A0%E7%AB%A0%E5%9B%9B%E5%8F%A5>)
[[10] やまぶき：山吹色のこと。](<https://kotobank.jp/word/%E5%B1%B1%E5%90%B9%E8%89%B2-193023>)
[[11] そくしつ](<https://kotobank.jp/word/%E4%BF%83%E8%86%9D-2843222>)
[[12] しじま](<https://kotobank.jp/word/%E3%81%97%E3%81%98%E3%81%BE-519145>)
[[13] もだし](<https://kotobank.jp/word/%E9%BB%99%E3%81%99-645637>)
[[14] ひけらかし](<https://kotobank.jp/word/%E3%81%B2%E3%81%91%E3%82%89%E3%81%8B%E3%81%99-365228>)
[[15] ていたらく](<https://kotobank.jp/word/%E7%82%BA%E4%BD%93%E3%81%9F%E3%82%89%E3%81%8F-333299>)
[[16] ふご](<https://kotobank.jp/word/%E7%95%9A-617770>)
[[17] かかわらず](<https://kotobank.jp/word/%E6%8B%98%E3%82%8F%E3%82%89%E3%81%9A-2020347>)
[[18] たんでき](<https://kotobank.jp/word/%E8%80%BD%E6%BA%BA-564478>)
[[19] おけらになる：無一文になること。](<https://kotowaza.jitenon.jp/kotowaza/6174.php>)
[[20] うんしょう：雲のある空。また，高い地位のたとえ。](<https://kotobank.jp/word/%E9%9B%B2%E9%9C%84-2012670>)
[[21] ほんしゃ](<https://kotobank.jp/word/%E3%81%BB%E3%82%93%E3%81%97%E3%82%84-2866388>)
[[22] むつき](<https://kotobank.jp/word/%E8%A5%81%E8%A4%93-452487>)
[[23] へさき](<https://kotobank.jp/word/%E8%88%B3%E5%85%88-624773>)
[[24] とも](<https://kotobank.jp/word/%E8%89%AB-584975>)
[[25] ここの阿と吽とは，生命の始まりと終わりのたとえ。仏語。密教の言語観で，阿は悉曇一二母音の初音で開口音。吽は終わりで閉口音。この2字が万有の始原と究極を象徴するとし，それぞれ万有の原理，それらの帰着する智徳を示すとする。また，前者を悟りを求める心，後者をその結果としての涅槃にあてることもある。](<https://kotobank.jp/word/%E9%98%BF%E5%90%BD-24038>)
[[26] あからく：楽焼茶碗の一種。焼成が非常に難しく，古くからの作品は現存するものが少ないとされている。](<https://kotobank.jp/word/%E8%B5%A4%E6%A5%BD-422892>)
[[27] えんか：飲み終わった後に残る茶の香り。](<https://kotobank.jp/word/%E8%8B%91%E9%A6%99-2013629>)
[[28] つばえみ：にっこりする。](<https://kotobank.jp/word/%E8%8E%9E%E7%88%BE%E3%82%80-3138279>)
[[29] しかと](<https://kotobank.jp/word/%E7%A2%BA%E3%81%A8-517331>)
[[30] そうそう](<https://kotobank.jp/word/%E6%B7%99%E6%B7%99-552753>)
[[31] 兵法三十六計の第十二計「手に順いて羊を牽く」の引用。](<https://ja.wikipedia.org/wiki/%E9%A0%86%E6%89%8B%E7%89%BD%E7%BE%8A>)`
      ],
    },
    en: {
      userID: '160039348597817344',
      data: [`This is my first entry for the advent calendar. I'm a bit nervous, but I hope you enjoy it!

It's scary to feel how fast time goes by. Turning another year means there's less time to spend in your life. So I always think about how I can spend my spare time productively. One of the good ways is finding a goal. Improving my English had been my absolute goal for the past over 10 years, but that shifted this year. I stopped putting all my heart into that, such as studying for the exams and learning new words. I always  wanted to go to the next level. Almost every learner must have felt this way. However, I think you need to stop “studying” after you become a certain level. Learning a language requires a lot of time and effort. Instead of focusing too much on your improvements, just do what you like with your target language. Therefore, the results will follow you after. After I learned this, I've been able to enjoy my other hobbies. 

 My attitude towards learning English has changed, but I still try to listen to English every day. Here's another shift that happened this year. Now I watch English videos without subtitles. I started doing that to decrease my screen time, and this has been working so well on my listening skills. I realized that I wasn't really listening to sounds when I put subtitles on. I feel like sentences and words are left better in my brain when I don't have them. 

 The biggest highlight of this year is definitely a trip to Canada. Honestly, I was reluctant to go there because it was expensive and very far away from Japan. However, I really enjoyed it. 
Nature in Canada was absolutely magical. I was the type of person who liked city walking and seeing old heritages, but now looking for nature has become my top priorities when it comes to traveling. I hope I can visit another country next year. Traveling to as many countries as possible is my life time goal.`],
    },
  },
  {
    day: 3,
    jp: {
      userID: '567483114318725120',
      data: [`# アドベンド・カレンダー2025年12月3日
## その一　満月

この夜、私は月を見た。黄金色の満月は前より一層激しく輝いている。水平線よりやや高く、屋根をギリギリ越えていたその満月を、私は見上げていた。厳密に言えばそれは満月ではない。ほんの少し欠けているそれが、決して満ちることが出来ないことも、まだ誰にも知られていない。

その月は、私に微笑んでいる気がしてきた。こんな優しい色の月は初めてだ。日常より優しく、平常より輝く、「特別」になったような錯覚をしていた。

曇った空も、いつのまにか真っ青に晴れた。雲たちは何かを恐れているような、怖がっているような、急ぎ足で舞台の中心から離れて行く。月は私を見つめていた。私もまた、月を見つめていた。目が合った。急に、体の底から一気に悪寒が走った。

今、私は一体何をしているのでしょうか。
月を見ちゃダメって、知ってたのに。

あーあ、見ちゃった。見てしまいました。
私はどうなるのか。わからない。知る術すらない。

月は私を宥めていた。
きっと大丈夫、と彼女は言った。
今宵を楽しみましょう、と彼女は言った。

私は、月と一緒に、ずっと、きっと。
いつまで、いいよ。

私は目を閉じた。
## その二　時間

チリン。どこかで鈴の声が聞こえた。
目の前は馴染みの寝室だった。机の上のランプが徐々に、優しく部屋を照らしていた。暖かい琥珀色の光が部屋を染めていた。

今は午前2時。十二月三日。
腕時計の秒針は普段より遅く進んでいる。錯覚かな。

もう一回、ゆっくり数えた。
一秒。二秒。チクタク。チクタク。遅い。
ネジを回すのを忘れたかもしれない。

三回、ネジを回した。
一つ。力を込めて。
二つ。ゆっくり。
三つ。

カチャカチャという声が聞こえた。
うるさいなと思いながら、手元を見ると、腕時計のブレスが鳴っていた。

手が震えていた。その震えが移ったように、手から腕へ、腕から体中へ、まるで凍死寸前の病人のように、私は震えていた。

我関せずに秒針は鳴り続けた。
早くなった気がする。チクタク、チクタク。

ランプの灯りがゆらりと揺れた。蠱惑的な誘い。
私は名も無い衝動に鷲掴みにされ、窓の方向へ一歩踏み出した。

また、鈴の声が聞こえた。
チリン。
## その三　日光

目が痛いほど照らしている真昼の日光の中で、私は走っていた。息が途切れ途切れ、視野の縁が歪んでいた。

路肩で野垂れ死んだ電線はピクと動いた。虫の息か。

一昨日まで立派だった電柱は腰からへし折られ、動かなくなった。

いつになったら治るかな。
関係ないことを考えると痛くなくなる。私はそう算段をしたが、彼女は答えた。

治らないよ、と。

聞こえないフリをした。

走らなくてもいいよ、と。
どこへ行くの？小学校まで走っても意味ないよ？

知ってるでしょ？と。

小学校まで走ろうとしていた。意味ないことも知っていた。でも何もしない自分が嫌いだった。だから走っていた。

私は言った。
今は真昼でしょう？何でいるのよ？帰って。
喉を絞ったような、声にならない声だった。
もう帰ってよ。

彼女は嗤った。
バカなこと。そんなの無理に決まってるでしょう。真昼かどうか関係ないわよ。

知ってた。

転んだ。手のひらから血が出た。真っ赤な、生きていることを明示しているような色だった。

私は生きたまま死にたい。彼女とは嫌だ。

逃げ道があった。
そっと、自分の左ポケットを触った。`],
    },
    en: {
      userID: '1169544091953012756',
      data: [`Hello, I'm a new user and this is the first time I am expressing my feelings to a large server like this. 

I used to think the worst part of having Pendred Syndrome was the silence. I was wrong. The worst part is that every year, I lose yet another aspect of myself and I can’t stop it. Last year, I could still feel bass trembling through my headphones, following the strum of a guitar, immersed into the moment.

Now all I hear are the vocals. They are flat and lifeless. I can still hear the fog of the instrumental in the background, but it's as if I can’t quite reach the missing parts because they’re already gone. I feel as if my own body is peeling me away, piece by piece, and yet I’m the one left apologizing for losing myself. 

I’m supposed to be going to America in a year, but how am I meant to do that if I’m losing the very sense that shaped everything I understand? Hearing is a universal thing, something everyone can relate to, and yet I feel as if that sense is slipping away from me. I don’t want to be in a new country and have a translator follow me like I’m a dog on a leash. I’ve already learned Japanese Sign Language, and I’m trying to get better in American Sign Language, but I still want to listen. I still want to hear. So why can’t I keep that? Why do I have to look at my parents and read the grief on their faces, knowing that they can’t help me. Why wasn't I just born different?

I haven’t actually worn my hearing aids in about a year, around the same time the music started to become foggy. I mean, I still hear it. it’s not good, but it’s not bad either.. I guess it’s in between? A gray zone kind of. Voices come through but they've lost what makes them stand out, and now that I’ve lost it for so long, I don't remember how it was. But when I wear my hearing aids, I feel as if I’m walking into a world and there’s a spotlight on me at all times. People change when they notice them. Their tone shifts. Their eyes stick. I hide them, knowing that I shouldn’t, because the truth is they help, they bring me a sense of clarity. My hearing is significantly better. But I don’t feel normal. And I hate that I don’t feel normal.

I hate what this disease is doing to me. I feel like I’ve lost the biggest part of me. But I don’t want to hate myself because of it.`],
    },
  },
  {
    day: 4,
    jp: {
      userID: '681475127208312854',
      data: [`こんにちは！皆さん、お元気でしょうか。
      もう一年経って、もうすぐ2026年に入ってしまいますね。20代になってからなんだか、時間の流れを前よりも強く感じています。今回のアドベントキャレンダーでは、今年経験した人生初めての出来事について少しお話ししたいと思います。

      今年は、色々ありましたが、去年よりも楽しい思い出をたくさん作れたと思います。
      ５月の頃には、修士号の申し込みの締め切りまでに論文を提出し損なって、そのあとある日本の奨学金のプログラムでも選ばれなかったことが精神的につらくて憂鬱でしたが、７月の頃に日本の経済産業省が毎年実施しているインターンシッププログラムに申し込んでみて、驚いたことに一次の面接のメールが届いていてすごく嬉しかったです。そして２次の面接を受けて、埼玉県春日部市にある企業とマッチングされて、その企業と最後の面接を受けた結果、インターンシップがやっと決定されました。インドでは、全国から11人が選ばれたようで、飛行機に乗る前にみんなと一緒に集合して写真を撮っていたその夜はすごくワクワクしていて、人生で一番嬉しかったと言ってもいいくらいでした。

      50日間のそのインターンシップでは、楽しんだことも、苦労したこともたくさんありましたが、このインターンシップは自分の自立心と日本語力に大きな影響を与えたと思います。私がインターンをやっていた会社は英語を話せる人が一人しかおらず、会社のみんなと日本語でしか話すことができなかったがゆえに、少しずつ自分の会話力も上がってきたと思います。この経験を通して、もしこの先もまた日本に行くとしたら、何があろうと自分でなんとかできるという実感を得ることができたと思います。

      週末ごとに観光のプランを立てたのに、たまにちょうど週末に雨が降ってきて、その観光のプランがいくつか台無しになってしまいましたが、東京と鎌倉、そして箱根まで行ってみて、EJLXの友達ともオフ会できて非常に楽しかったです。それまで日本に行くのも、友達に会うのも「いつか」の話なだけで、本当に日本に行って友達に会えるとは思わなかった私には、本当に夢か現実か分からないくらいでした（笑）。

      もうインドに帰って２週間も経ちましたが、日本はまだ恋しいです（笑）。来年もまた行けるように頑張っています！

      最後まで読んでくれてありがとうございます！また、来年のアドベントキャレンダーで会いましょう！`],
    },
    en: {
      userID: '231805618141265930',
      data: [`Nice to meet you everyone ～～
I'm Kani, living in Tokyo.
My district is famous for Haneda Airport.
I am newbie of this server so go easy on me!

Today, I want to talk here about my memory of pet eel .... the one that made me cry the most in my life...(kidding ,maybe it's a lie that I cried the most lol)`,
        [{
          type: 'image',
          file: 'f34a9066321aea829884fbdc60083f43.png',
        }],
        `The story was started from Tama River which flows by Ota-ku.
When I was a kid , I often went fishing there with my grandfather , my father and so on. 
And one day, I caught something on my fishing rod ... a baby(maybe baby ww) eel. My first thought was,"Oh, this fish is a bit cute... I'll keep it in my house" so that time , with no hesitation, I decided to raise the eel. 
At first, I didn't think the fish could get attached to human and not so cute. 
But ! In conclusion ,the eel was insanely cute. For example , when I put a pipe in the tank,the eel happily made it his home.
(since I don't know the eel's gender to the end so I just call it“he”in this article)
 Even when he was hiding under the sand, if I tapped the edge of the tank, it slowly poked its head out like 
“Did you call me ? What's up?”
Now I can say he is so adorable ... absolutely adorable.
Look, he is cute even when hibernating (of course he is not dead www)`,
        [{
          type: 'image',
          file: '1764806319816.png',
        }],
        `Finnaly, I lived with him for more than 10 years. 
But... tragedy happened suddenly. 
One summer day, I came back home and saw something moving on the floor on the entrance. The eel had escaped. I quickly put him back into the tank, and he swam like usual. 
So I thought “His slimy body saved him… thank you, slimy coating…” (If you don't know, eel's surface is very slimy) 
But ... the next morning, when I checked the tank, he had turned white in water.
He had died. 
I cried a lot. 
I remembered everything that time ... the time catching him at the river, how he ate food, everything. And I blamed myself for never thinking"What if he escapes?" 
After my feelings calmed down, I started thinking about How should I say goodbye to him? Should I bury him in my garden? But what if a stray cat digs him up? That would be … big problem. 
After thinking for a long time… I decided to honor him by cooking and eating him as glaze-grilled eel. It was the first time I ever tried to prepare and cut an eel so of course it was really difficult thing for me.`,
        [{
          type: 'image',
          file: 'AP1GczNsmy_Zs0UtiIhMZfTa_NgwXICfBbA0SAvJT9Uh7kWP5rAwN_LUQkTvtgw1519-h1139-s-no-gm.png',
        }],
        `But finally, I could finish to cook the eel and when I ate it, I cried again..... the taste was… honestly, the texture was super tough and not very good lol.
But that didn't matter for me. It wasn't about taste. It was a farewell , a final thanks to my eel. In the end, I became one with him. 
He was born in the Tama River, lived with me, and in the end, became a part of my life forever. This is a slightly sad but somehow funny , my memory of the eel which spent more than 10 years with me through my childhood. 
Coming to think of it, I realized after he died that I had forgotten to give him a name ... lol`,
      ],
    },
  },
  {
    day: 5,
    jp: {
      userID: '220298613073379328',
      data: [
        `今年のアドベントカレンダーに何を書けばいいか少し悩んでましたけど僕の最新の趣味について書きたいと思います。大学生の頃からずっと料理が趣味です。うまくなればなるほど美味しく作れるものがどんどん増えていきますし。今年は特にパン作りと菓子作りにはまってきました。新年が始まってから夏にかけて毎週のようにクッキーやらケーキやらパンやら色々なレシピを作ってみました。今日、最近初めて作ってみたチャバッタというイタリアのパンのレシピを紹介したいと思います。

美味しいパンを作るのなら発酵の種が必要ですよ。皆さんサワードウという発酵種の一種を聞いたことがあるだろうと思いますけど、チャバタを作るならビガ種を使うんです。ビガは単純に水、小麦粉と酵母の混ぜ合わせです。`,
        [{
          type: 'image',
          file: 'hydro1.png',
        }],
        `材料を混ぜ合わせたらラップを被せて12時間から16時間まで寝かせます。半日かかるからパンを作る日の前夜に作っておくことを勧めます。なぜこんなことする必要があるかと思っている人が何人かいるでしょうね。その理由は2つです。１つ目はパン生地に種を加えることで長い時間発酵させたパンと同様のうまみを与えるんです。2つ目は出来上がったパンの感触を
上向きにさせるんです。

半日が経ったらビガが2倍ぐらい大きくなります。`,
        [{
          type: 'image',
          file: 'hydro2.png',
        }],
        `これからほかの材料の重さを量ってビガに混ぜこみます。`,
        [{
          type: 'image',
          file: 'hydro3.png',
        }],
        `材料の重さを量るのに料理用の秤は必要不可欠です。便利でかなり安いのでパン作りやクッキーづくりに興味あるなら是非買うのを進めますよ。材料を量ってからスタンドミキサーに投入します。パン生地が均一に混ぜるのに約8分かかります。チャバッタの生地の水分の割合はほかのパン生地より高いからべたべたくっついて扱いにくいんです。混ぜたパン生地は2時間ぐらい休ませます。休ませる間に30分ごとにパン生地を数回引いて折り重ねます。`,
        [{
          type: 'image',
          file: 'hydro4.png',
        }],
        `生地をつかんで…`,
        [{
          type: 'image',
          file: 'hydro5.png',
        }],
        `引いて折り重ねる`,
        [{
          type: 'image',
          file: 'hydro6.png',
        }],
        `生地を休ませなくてはならない理由は２つ以上あります。
生地を休ませることでグルテンを落ち着かせるんです。グルテンが落ち着いたら生地はせいけいしやすくなりますし。焼いたパンも柔らかくなります。生地を寝かせる事で水分を行き渡らせて均一な生地になります。

生地を2時間休ませてから小麦粉をかぶったオーブンシートに移して小麦粉を振るいます。生地が手にくっつかないためにできるだけ優しく素早く触ったほうがいいです。優しく20㎝ｘ25㎝長方形に伸ばして三等分します。`,
        [{
          type: 'image',
          file: 'hydro7.png',
        }],
        `分けた生地にもう一度小麦粉を振るってラップで覆って30分休ませる。ピザストーンとをオーブン対応のフライパンをオーブンに入れておいて温度を250度に予熱します。ピザストーンを使う必要はないが使わない方よりパンの下がこんがり焼くので僕は普段使っています。フライパンをピザストーンの下に置いておきます。温まったオーブンにパンを入れてすぐにフライパンにお湯を一コップ注ぎます。蒸気がパンをもっと膨らませるからオーブンに入れて直後にお湯を注ぐんです。5分焼いたら温度を230度に下げてまた20分ぐらい焼きます。焼いたパンをオーブンから取り出します。粗熱が取れたら切ってバターやジャムで食べて楽しみましょう！

それでレシピが終わりましたね。できるだけ日本語のレシピを見ないで書いてみましたがどうでしたか皆さん。料理の用語や表現は知らなくて本当に難しかったけど挑戦してみてよかったと思いますね。今まで読んでくださってありがとうございました！`,
        [{
          type: 'image',
          file: 'hydro8.png',
        }],
      ],
    },
    en: {
      userID: '294441472864944129',
      data: [`本日はアドカレの投稿２件が予定されていますので、投稿させていただいて失礼いたします。

今度も将来の予定について書きたいと存じます。
皆様はご存じないかもしれませんが、近いうちに東京の学校に入学する予定です。
その学校では少なくとも1年間ビジネス課程を受けることになっております。
日本で勤めることは長年の夢であり、その実現が叶えば幸いに存じます。叶いますように留学ビザをもらえ、学校に通いながら就職活動をする予定です。
そのため忙しくなるかもしれませんが、この機会に日本を改めて満喫したいと存じます。

当サーバーに参加し始めてから既に5年半以上です。おかげさまで、会話能力などをよく伸ばすことができました。手伝ってくださった方々に誠に感謝いたします。

作文が短くなってしまい、申し訳ございません。アドカレを機会に敬語の練習をしてみました。最後までお読みいただきありがとうございました。`],
    },
  },
  {
    day: 6,
    jp: {
      userID: '289842661630672896',
      data: [`落第。
この言葉はずっと前から知ってた。若いころから知ってたのに、本当の意味は分かっていなかった。
その気持ちを経験したことがなかったからだ。ゲームでもチャレンジでも、私はいつも勝って、みんなから誉められてきた。だから当然、自分は天才なんだと思ってた。

4〜5か月前、JLPT1級を受けようと思い、公式サイトで申し込んだ。
アメリカ西海岸に住んでるから、一番近い試験会場で受けられる日は12月7日――明日だ。

日本語を勉強し始めたのは、このサーバーに参加した日。
その時、私は「2年以内にN1に合格できる」と本気で思ってた。
今でも、頑張れば誰でも2年間でN1を取れると思ってる。
――でも、今の私はできない。

この時点でもう無理だ。合格できない。
4〜5か月も前に申し込んだのに、準備も勉強もほとんどしてこなかった。
申し込みをしてから今日まで、私はDiscordで友達と話したり、ゲームしたりばかりだった。

勉強を始めたばかりのころは集中できて、やる気もあって、「絶対合格する」と思ってた。
でもその気持ちはゆっくり薄れていった。

明日、私は落ちる。合格しない。
人生で初めて、落第する。

しかたないなー、背負いすぎてたんだ、私。

全部、自分のせいだ。
それは認めてる。
失敗を認めるのは本当に難しい。でも必要だ。
勉強しなかったのも、準備しなかったのも、友達と遊んだのも、ゲームしたのも――全部自分だ。

今年はもう何もできない。それは理解してる。`],
    },
    en: {
      userID: '1314649194786459762',
      data: [`Hello, this is my first time posting in this event! I wrote a little poem, it's a bit embarrassing but I'm posting it anyway haha! It doesn't have a title yet, so I would love some suggestions! 

Was it our destiny to choose each other
Or was it her who made you dream in colour
I didn’t know If I could love you the same
After those memories, piece by piece they came
but who would’ve known
after our roles were played and our fates spun
that you could’ve loved me the way lovers had done
together we vowed under the milky trail
for our own journey we would set sail
but destiny, sweet destiny the games she plays
she filled our seas with snakes and my heart with ache
to watch you leave this earth without me
knowing I hadn’t opened up like you’d done for me 
the secret untold 
I’d carry forever
From earth to Elysium
Could it ever be harder?
But you’d never know
If what we held was true
Fate took it from you
The chance to see it through
So tonight I weep
At the burning pyre
With no heart to say
We were never really lovers`],
    },
  },
  {
    day: 7,
    jp: {
      userID: '221167310986149888',
      data: [`チキ・チキ・バン・バンが出てBulikirályが入る

去年ハンガリーに引っ越した。私の仕事には英語だけ必要ですが時々英語のできないハンガリー人に会った。それではハンガリー語の勉強に決まった。世界の一番難しい言語とヨーロッパの一番難しい言語を同時に勉強してかなり疲れてしまった。同時に２つの言語を勉強できない。多分日本語を諦める？残念そうです。ノーベル賞を受けたクラスナホルカイ・ラースローの読みにくい小説をハンガリー語で読みたい、ハンガリー人にハンガリー語で会話したい、それでは全力勉強する。日本語の時間あまりない。まだ少し日本語の読解を習うけど聴解と会話とライティング力を休みになる。せめて日本語の勉強方法でハンガリー語を楽しんでいる。それではこれは私の最後のアドヴェントです。この鯖でまだ相談するけど今後私の活動は少しくなくなる。読んでありがとう。Viszontlátásra (ヴィソントラーターシュラ、Viszont-**lát**-ás-ra, また-**見る**-こと-に = また今度)

P.S. 短い記事。シャワー修理中でしたから。`,
        [{
          type: 'image',
          file: 'AP1GczPCzOWTKjk9coSyDqskAG4yPdCkNmDzvMkOqf1Xg1ps9_i2NKLNc09vw1055-h1055-s-no-gm.png',
        }],
      ],
    },
  },
  {
    day: 8,
    jp: {
      userID: '175973856874332161',
      data: [`皆さん,こんにちは.

僕は今年の日本への旅行を話したい.全部を言いたくなくて,だけ好きな場所を描写します.

日本に始めて行きました.この旅行の時たくさん楽しい物見ました.でも諏訪湖の隣市たち - 岡谷,諏訪や茅野 -この市たちが大好きな所でした.景色がきれいで,雰囲気が静かでした.もう3日東京にいて,すごくて,面白い所だが,煩すぎるでした.

あそこでたくさん神社に行きました.岡谷で洩矢神社を見て, 諏訪や茅野で4つ諏訪大社 - 下社 春宮, 下社 秋宮, 上社 本宮や上社 前宮を訪ねました.理由が簡単です.東方Projectが大好きなゲームフランチャイズです. 東方風神録で好きなキャラクターたちは - 洩矢 諏訪子や八坂 神奈子です.諏訪子の参考は - 洩矢神が洩矢神社の祭神で, 神奈子の参考たちは - 建御名方命や八坂刀売神が4つ諏訪大社の祭神です.この旅行は東方巡礼でした.

 来年も日本に旅行をするつもりです.まずもう一度洩矢神社や4つ諏訪大社にすごく行きたいです.それで名古屋や広島に見ます.

皆さん,謹賀新年!`],
    },
    en: {
      userID: '546655889415864330',
      data: [`One of the most impressive books I've read this year is 『自分は「底辺の人間」です [*I'm the person at the bottom*]』. This book tells about "Kyoto Animation arson attack" by chasing the criminal who had set the fire and killed 36 innocent people in Kyoto Animation studio.

TBH, I am almost the same age of that criminal (this year I've become 50). I have two paradoxical ideas in my mind as these ones: "Why am I not like this criminal? I could set a fire at anywhere" and "Anyway, I haven't set a fire at anywhere." They mean I can't tell why I am a sane, normal person in this cruel life.

Looking this case (massacre) from that criminal, even though I won't be able to forgive him absolutely, I find that I have a tiny sympathy for his terrible life. As you see (I tell about my life at everywhere on this server), I once also wandered mentally with a wounded soul, although the wound was just a banal kind of one.

TBH, when I was in my 20s, I couldn't find any good job like this criminal's life was so. Also, after I found the current job, I had a huge rage within my mind, which wasn't healed by anyone. It was like a wounded, bloody, and very dangerous beast.

Recently (last Friday), I joined a "year-end" party [忘年会]. There, I had some cookies and hot cups of tea a Danish couple and also a Japanese woman served me as a host. The Japanese woman introduced me an interesting Danish concept "Hygge", which means "cozy" (by my understanding).

With someone (your family, your friends, your co-workers...), having sweets or a glass of hot wine. Yes, actually they need little money. However, that "heartwarming" connection can ease your mind. That's why "Hygge" is so important for us.

I understand this as a good lesson. In my 30s, I needed not any money, but only a truly "Hygge" space which I could show true myself (as you see, I'm now referring to this server!). It's a Xmas season, and I think I should share my inner messed ideas as this. I hope you get something from this article. Thank you.`],
    },
  },
  {
    day: 9,
    jp: {
      userID: '146673688182259712',
      data: [`## __アドベント・カレンダー2025年12月9日__
-# この作品はフィクションです。

# 依存

私が死んだのは、３０万年前のことだ。

そう繰り返し自分に言い聞かせるのだが、二つの点において不正確な表現だ。
その一、まだ意識がちゃんとあるから死んだと言えるかは怪しい。（デカルトが言ったやつだったっけ）
その二、今の状態だと時間の計りようがないので、その３０万年というのは「ああ、退屈だなー」と無駄に嘆く度に頭の中で適当に増やした数にすぎない。

人生の思い出のほとんどが霞んできた今となっても、あの日のことはまだ鮮明に憶えている。いつもと違って引きこもらないで散歩にでも出かけようと促してくるような秋晴れの日だった。２時間ほど電車に乗って、半年前に都会に引っ越してきてから初めて山の奥へと向かって行った。

山道の小高いところから見渡すと、雲一つない空の青と、それを隙間なく塗りつぶそうとする果てしなく続く枯れ木の白が視界を占める。まだ枝にすがっている茶色い葉が一つ一つ強風にさらわれ、宙に渦巻きを描き、やがて地面をすっぽり覆う落ち葉に混ざる。道を踏む度にほんの少しだけめり込んでは元に戻る足元からするとその落ち葉の積み重ねの深さは計り知れないだろう。そんな思いにふけりながら全身が葉に包まれるように仰向けに倒れた。都会に出た頃はこういう自然に囲まれたところにはもう二度と行きたくないと思っていたのに私は何をしているんだろう、と自分を嗤った。

私は田舎育ちで、生まれてからずっと小さな村に暮らしていた。人が少ない分人間関係が何より重視される環境だ。３，４世代が同居している家族がほとんどで親孝行を怠るわけにはいかない。収穫量が農場によって年々変わることが珍しくないため、実りの悪いご近所さんを定期的に支えるのも当たり前のこと。そういう思いやりに溢れた文化のありがたみを感じるはずだったが、私はそれが窮屈にしか感じられなかった。こうしてある日、少ない荷物をまとめ、駅へ向かい、自分の人生を踏み出した。

都会暮らしの目標はとにかく他人に頼ることも頼られることもない生活をすることだったが、初っ端からなかなかうまくいかない。荷解きをやっと済ませてすぐに洗濯機が動かなくなり、大家さんに何回連絡しても修理人は来ない。倉庫管理の時給が物価高に追い越されてお金の余裕がだんだんなくなる。挙句の果てに、一昨日コインランドリーに行っている間に部屋に強盗が入った。そういった不幸の連発を食らって途方に暮れてしまったので気分転換に都会を離れてハイキングでもしようと思ったのだ。

自分の惨めな思いに浸るのに飽きて立ち上がった瞬間、突然強風が今までのと一層激しく吹いてきて、落ち葉が一斉に跳ね上がり四方八方に散って、吹雪のように視界を完全に遮る。ほんの一瞬は光景に見とれ、ぱっと我に返った。踏ん張って身体を支えるために周りにある木へ行こうとしたが、足元が急に崩れてしまって、まるで最初から地面がなかったかのようにすとんと落ちていくのを感じた。

ついに足が地面についたときにはもう永遠のような時間が経過していた。しばらく渾身の力を込めて全身を完全に包む葉を払って抜け出そうとしたが、重すぎて結局数センチしか動かせなかったのでどうにもならないと観念する。体力も精神力も尽きたまま眠ること以外出来そうにないのでそうした。

目が覚めるとちくちくとした感覚が体中にさっと走り抜けた。腕を動かそうとすると何かに引っかかっているのに気が付く。慌てて手で腕の周りを確かめてみると千本もの糸状のものに触れてぞっとした。周りのキノコたちに生命を奪われ始めているのかと思ったが、不思議なことに精神の疲労は眠ったときと比べると少しは回復した気がする。もしかして、栄養を…与えてくれているの？

前に言ったようにあれから３０万年が経った。肉体はとっくに朽ち果てているが、菌糸を通じて意識らしきものは保てている。キノコたちの声も聞こえるようになり、多少話し合うこともできるようになっている。栄養を与え合うことで一つの生体になる。結局のところ人間への依存は回避できたものの、想像もつかないような全く別のものに依存するようになっているのだが、それはそれでいいのかもしれない。`],
    },
  },
  {
    day: 10,
    jp: {
      userID: '185051004763504640',
      data: [`# **__アドベント・カレンダー2025年12月10日__**
## 「なっしーズ」
 
この物語はフィクションである。作中の如何なる人物、思想、事象も、全て紛れもなく、現実に存在する人物、思想、事象とは無関係だ。
 
以上のことに同意した者にのみ、この物語を知る権利がある。
 
＞同意する
＞同意しない
 
＞＞同意する
 
と、選択すると画面が真っ暗になり、次へ進もうとする気配が皆無であった。
 
「やっぱダメかー」
 
まだ残ってるかどうかわからないぐらい軽くなった缶コーヒーを手に取り、そっと自分の唇に当てる。最後の一滴が喉の奥底に落ちるように首を後ろに倒し、手を必死に上下に動かした。
 
「小鳥遊さん、そのポーズでその動きすると、セクハラだと勘違いするからやめてくれません？」
 
隣の席の月見里だ。自分より2コ下の生意気な後輩。顔が整っている綺麗なお嬢様。彼女が今年の4月に入社したころはミャクありかもって思ってたけど、どうやら向こうは女の子が好きらしい。
 
「女の子に生まれ変わりてー」
 
「え？」
 
「なんでもない。それより早くこれを何とかしないと今日はお泊りコースだぞ」
 
「私は定時で帰りたいです」
 
「定時ならもう30分すぎてるけど」
 
「私は10時出勤なので小鳥遊さんより定時が1時間遅いです」
 
「それもそうか」
 
そう言うと、会話が終わってお互いのキーボードのカタカタする音のみが聞こえていた。
暫くして、画面の右下の時計が18:57となると、隣の月見里がソワソワし始めている様子が自分の視界に入り込んだ。残りの作業量を考えると、3分ではとても終わらせそうにないだろう。カップラーメンではあるまいし。
 
「あとは俺がやるけん、月見里は19時になったら帰りな」
 
「え、いいんですか？」
 
「今日はイブだし、月見里は彼女とのデートがあるんだろう？俺は彼女の『カ』の字もないから」
 
「そもそも春夏冬さんが今日休んだから今日はここまで立て込んでるし、なんで私たちがあの人の分までやらないといけないんですか？」
 
春夏冬は自分の同期で、座席は月見里の隣。小鳥遊、月見里、春夏冬。3人合わせてなっしーズ、アローラのすがた。なんちゃって。今日は突然の風邪で会社を休んだ。彼女とクリスマスイブを過ごすために仮病なんじゃないかって月見里は言ってたけど、春夏冬に限ってそれはない。なぜならあいつは月見里と違って男が好きだ。なので仮病だとしても彼女じゃなくて彼氏だ。あとちゃんと39度の体温計の写真も送ってた。
 
「そう言っても仕方がないんだろう？本人も好きで休んだわけじゃないし」
 
「残りの作業は本当に一人で大丈夫なんですか？」
 
「伊達でなっしーズのエースを名乗ってないからな。こんなんちょちょいのちょいよ。月見里はなっしーズの唯一のリア充として俺と春夏冬の分までイブ楽しんできな」
 
「部長がつけた変な名前で私まで巻き込まないでください。でも、ありがとうございます。お言葉に甘えてお先に失礼します。」
 
月見里は椅子から立ち上がり、自分に軽くお辞儀をするとすぐにエレベーターの方に向かった。次々と退勤する周りの他部署の人たちを一人ずつ目で追いながら頭の中のタスクリストを整理し、息を深く吸い込んだ。吐息。
 
「やるか」
 
-# つづく`],
    },
  },
  {
    day: 11,
    jp: {
      userID: '1090395157700038676',
      data: [`2025/12/11

アドベント・カレンダーイベント！
このテキストはこのイベントのために作られた。辞書、deepl、とAIも使わないから間違いことがあるかもしれないので教えてね。

じゃ、2つのことについて話したい。日本語を勉強する理由と今年の活動だ。

まず日本語を勉強する理由。実は、元々、日本の作品があまり好きじゃなかった。
なんか欧米(おうべい）の作品のほうが好きだった。例えば昔は「the cardigans」が好きだった。９０年代のバンド、それは。

ねえ、２０２１に、コロナ時代に、突然ユウチュウブに日本の歌がいつも勧められた。竹内(たけうち）まりやさんの「plastic love」だった。
最初、僕は「へえ、こんなオタクものが嫌だ」と思った。そう、僕はそんな人だった笑笑。

ですが、いつも進まれて、聴いてみようと思った。「日本の歌はどうかな？」と思った。

聴いてみたあとで「へえ、すごいじゃん」と思った。声と音も、特にバスの音が、なんか熱いと思った。まあ、今も思っている。

そのあと、国分(こくぶ）友里恵(ゆりえ）さんや山根(やまね）麻以(まい）さんなども聴いてる。

日本の現代(げんだい)　の音楽も聴いてる、例えば「ずっと真夜中でいいのに」やツユなども聴いてる。ですから、日本語を勉強する理由はシティポップだ。今、音楽だけじゃなくて、アニメも好き。

2つのトピックは最近の僕の活動だ。ねえ、今年車の免許(めんきょ）を取得(しゅとく）した。スキールを得てから、嬉しい。もっと多ければ、嬉しい。お金があれば、来年フォークリフトを練習したい。そして日本語能力試験N3も受けたい。

そして、今日本語の教師のアシッシテン(assistant. 日本語で分からない）になった。日本語学校(学校じゃない。なんか英語では「course」みたいな）で後輩を教えてる。

僕も生徒だよ。だが、簡単なことだけ教える。ひらがな、カタカナ、N5レベル漢字、そんなことだけだ。お金ももらうよ。

先月、ジョグジャカルタに行ったよ。家族と一緒に行った。ジョグジャカルタの道がきれいだが、結構熱いだった。

あの時、海岸(かいがん）に行って、マリオボロ通りとボロブドゥールにも行ったよ。本当に楽しかった。

僕も時々車を運転してたよ。チレボンからジョグジャカルタまで、そしてジョグジャカルタからペカロンガンぐらいまでだった。

高速道路(こうそくどうろ）で運転した。なんか、僕の言い方が子供っぽいね、笑笑。

来年、もっと成長したいだ。今VCに参加するのは本当に恥ずかしい。まあ、人と話すのは苦手だから。

ですが、来年やらなければならない。それは、僕の目的だ。じゃ、以上だ。ここまで読んでもらって、ありがとうね。また来年🫡

注意事項:
チレボン、ペカロンガンは町の名前
ジョグジャカルタは州、英語では「province」かも
ボロブドゥールはtempleだ、お寺って言われるかな
マリオボロは道の名前、有名だよ`],
    },
  },
  {
    day: 12,
    jp: {
      userID: '406785812643184647',
      data: [`# アドベント・カレンダー　2025年12月12日

-ー-ー-
また月日
いつの間にやら
溶けていき
光も追えぬ
瞬く命
-ー-ー-

## 青春(前半)

辞書の定義：
【若い時代。人生の春にたとえられる時期。希望をもち、理想にあこがれ、異性を求めはじめる時期。】

アドベントカレンダーに書くのは初めてで、日本語もまだまだなので、間違いなどに誤っておきます。今日は青春についての自分の考えを書きたいと思います。

「青春」を英語にすると、よく「若さ」と同様になります。 日本語と比べたら、英語の youth はもっと簡単で、日本語の「青春」ほど若い時代の特別さを表しません。それでも、言語にかかわらず、大人になる前の若い時代は人生の一度きりの春だと思われています。

今日の誕生日で18歳になり、青春のおわりについてきました。この18歳の自分が大人になったなんて、信じられません。もし日本にいたのなら、成人するまでの二年間でもっと大人っぽくなったかもしれないけど、自分が「大人」とはまだ言えません。

正直にいうと、今までの成長や生活などの変わったことはあまり気づいていません。今日はまるで昨日のようで、昨日はまるで去年のようです。18歳なのに、大人になったとは思いません。私はまだ子供っぽいままで、この子供っぽい考え方で、わたしが自分のことを本当の大人だと思える日は来ないと思います。

若者として、よく聞いたのは「若者は若さを無駄にしている」です。終わっていないうちに、青春を大切にしたほうがいいとよく言われたこともありますが、今でも意味はわかりません。青春の意味さえわからないなら、一体どうやって大切にできるのでしょうか。その青春を大切にするのは、一生懸命がんばることか、できるだけ毎日を楽しむことか、結局答えは見つけませんでした。

どうやって大切にしたらいいかと考えながら、青春はもう終わってしまった。それで、仕方が知らないままで、もっと大切にすればよかったのにと思いました。

でも、大切にしていなかったとは言えません。

わたしにとって、青春は思い出の存在です。だから、その青春を大切するのはその思い出を認めてあげて、持ち続けながら進むことです。

不安で満ちている日々も、喜びが溢れた日々も、それぞれの違う日々で今日にたどりつきました。私が間違ったことや、正しかったことのおかげで、今日の私になりました。もちろん、恥ずかしかった思いでも、直したいことも色々あります。でも、私の青春で、細かいことでも変えてしまったら、今の自分と違う自分になったかもしれないと考えると、過去を変えることが嫌になってしまいます。もちろん、私は全然完璧じゃないんですが、どんな私でも完璧になれないでしょう。

だから、これは私の「青春を大切にする方法」です。青春の間の努力と新しいことに挑戦することではなく、すでに去った時に青春の全部を受け入れることです。後悔したことも、悲しかったことも、嬉しかったことも、全部を愛しく振り返って、青春の思い出を大切にしたいと思います。そうしたらいつか、「ちゃんと大切にしたんだよ！」と言えるようになるでしょう。

でも、とりあえず、18歳の大人として、初めてのお酒を飲んでみたいと思います。

-ー-ー-
ついに消え
謎の青春
やっと答えた

-# 書かせていただいて、ありがとうございました。そして、読んでくれた人も、ありがとうございます。間違いが少なかったらいいね。
-# これは前半で、後半は12月28日に<@838341081937477673> に任せます。後半を読んだら、最後の片歌は旋頭歌になります。`],
    },
  },
  {
    day: 13,
    jp: {
      userID: '1053543415897391145',
      data: [`２０２５年１２月１３日

今まで日本語を6ヶ月だけ勉強しているけどアドベントに参加してみたかった。今年は色々なことがあった。２回旅行してポルトガルとオランダとベルギーに行ったしかないこのカキコは旅行についてじゃない。今年は絵の勉強について書きたい。このサーバーであまり話さないけど僕は強迫性障害がある。強迫性障害は常に何かに対して執着してしまう病気だ。今年は強迫性障害と向き合うための一環として絵を描き始めた。絵を描くとリラックスできて、自分のことについて考えられるからだ。目標は良い肖像を描くことだ。`],
    },
  },
  {
    day: 14,
    jp: {
      userID: '718094067820396614',
      data: [`2025年12月14日 <a:rainbow_star:1214890195581804567> 

皆さん、こんにちは。
今日は、私にとってとても大切なことについてちょっと話したいと思います。<:ganyusmile:841335706655785038> 

新しい専攻を始めてから、私はよく「失敗しているなぁ」と感じていました。 リアルの友達もいないし、仕事もクビになったし、家族の問題もあるし、全部が私の敵みたいで、大きいな鬱になってしまいました。サーバーでは明るい（時々ちょっときついｗ）私を知っている人が多いと思いますが、画面の向こうの本当の気持ちは見えないだろうね。笑ったり、楽しく話したりしても、この冬は今までで一番寂しくて、「死んだ方がいいかな」と思ったこともありました。家でごろごろしたり、授業を全部サボったりして、シャワーに入るエネルギーもほとんどありませんでした（汚いのは分かるよｗ）セラピストと話したら理由は分かったけど、「分かっても、私はどうすればいいの？」と思って、鬱は何週間も続きました。<:OkayuSad:1025229047569063996>

ちょっと悲しいよね？何が変わったのか分からないけど、自分のことがめっちゃ嫌いになって変わることにしました。筋トレをし始めたり、睡眠パターンを直したり、もっとちゃんと食べるように頑張っています。一番大きい問題は授業に追いついて、1月の試験に合格することです。できるか分からないけど、「なんとかできる」と信じたいです。今でもエネルギーがない日があってその時に思い出します、これはレースじゃないよ、ゴールまで全力疾走する必要はない。ゆっくりと進むべき長い旅で、途中に障害もあります。<:ganbare:820306501276663838>

今年が終わって、新しい年が始まる時、私は5年前の自分みたいになりたいです。あの時みたいに、幸せで、元気で、そして一番は希望を持っている私に戻りたいです。<:happy:498598126224146473>

このメッセージの目的は何度も人生に石を投げられて、深いところまで落ちて、もう道が見えなくなっても、出口があるということを伝えることです。すぐに見えないかもしれませんが、ちゃんとあります。<:aa_love:1097836594234392700>

最後まで読んでくれてありがとうございます！
メリークリスマス！そして、あけましておめでとうございます！ 😊`],
    },
  },
  {
    day: 15,
    jp: {
      userID: '233487484791685120',
      data: [`# アドベント・カレンダー2025年12月15日
-# この作品はフィクションです。

Corunさんとのコラボです。前篇は僕が日本語で書かせていただき、後編はCorunさんが英語での構成で一つのストーリーになっています。

※※※※※

ＡＣＴ．１　第33遠征しない隊

我々は、神様に裁きを受け、抹消（ゴマージュ）の罰をうけた。毎年寒い季節になると世界は少しずつ光を失い、やがて闇に飲まれてしまう。
と、長老さまが言っていた。だから長老さまは数カ月ごとに、遠征という一族を率いて遠くまで遠征する。そうしないものは、例外なく花びらになり、この世から消えてしまう。それが抹消。

もちろんおれも遠征したことがあるが、それは過去の事だった。物心が付いてから考えてみても、誰がどうやって何をしてどこでいつ神様を怒らせて天罰を食らったかは全然わからないし説明してくれなくて釈然としない。

抹消が本当に存在するかどうか知りたい。闇に飲まれた世界はどんな光景か自分の目で確かめたい。たとえ自分がこの世から消えても、真実に近づきたい。

だから、おれは行かないことに決めた。言うまでもなくみんなには理解してもらえなかったが、それはそれでいい。これが自分の好奇心を満たすためだけの行動なのはわかりきっている。長老さまもただため息をついて「あとに続く者のためにできるだけ記録を残しておいて」と言っただけだった。

今回の遠征は長老さまの３３回目なのでおれはこれを第33遠征しない隊と名付けた。メンバーはおれひとり。食料もためておいたが先が見えなくて正直、不安になったけれど、真実を知る覚悟ができた。長老さまと親友たちに別れを告げ、抹消までの一人暮らしをし始めた。

みんなが去ってから２ヶ月、世界はたしかに暗くなってきた。気温は低く、太陽もてっぺんに昇る前にいつの間にか沈んでしまう。気温は低く、太陽もてっぺんに昇る前にいつの間にか沈んでしまう。緑の大地も白くなり、自分の家ももう覚えられないほど世界が変わった。

これがのろいか。
むかし、山の奥には２本足で歩く友好的な生き物がいると言う噂は聞いたが、実際に存在するかは全然わからない。しかし、貯めた食料が僅かにしか残っていなく、このままでは終わりだとわかった以上、山に行くしかない。

山に登ったら温度が一段と下がった。身を切るような寒風が吹きすさんでいる。全身がひとりでに震えている。寒すぎてもうこれ以上進めなくなった。昔、みんなと遠征した時、疲れていけなくなったときは行進しながら歌うと疲労が軽減されると学んだことを思い出し、ひとりぼっちだけど小声で歌ってみた。そうすると疲れが少しだけ取れて、目的地につくまで頑張れる。。。はずなのに気がついたら体はもう雪に倒れている。

ここまでか。立ち上がろうとしても体はもう動けない。できるのは最期を迎えることだけ。空を見上げた瞬間、飛べないはずの生き物が飛んでいることを目に入った。。翼すらなくても、ぽっちゃりでも、楽しそうに重力に逆らっている。

魔女か。いや、ほうきにまたがっていない。
飛竜か。いや、体はそんなに長くない。

もしかして天使？と思ったら聞いたことのない声が聞こえてきた。

「ホーホーホー。。。。」

※※※※※
最後までお読みいただきありがとうございました。乱文乱筆お許しください。
物語の続きは@corunさんに頼みましたので、お読みいただければ幸いです。`],
    },
    en: {
      userID: '567647358322737152',
      data: [`Hi everyone, so I worked with Penta, and this is the rest of the story.
Since it's too long, I uploaded my post to Google Docs.
I hope you'll enjoy!
https://docs.google.com/document/d/11O8fDMkV1asbTKRprMKOYlKLVsKbbld_TEHRHRiNFyI/edit?usp=sharing`],
    },
  },
  {
    day: 16,
    jp: {
      userID: '496822929749835786',
      data: [`# 後悔

後悔は色々な形にあります。テストでいい点を取りそうはずですが、悪い点をとったし、告白したい好きぴは急に別の学校に引っ越して悲しくなるし、大好きな先生は別の学校に引っ越す前に、たくさんの協力と知識的な影響のためにのありがとう」メッセージを伝えなかった。

なので、後悔は憧れたことがメッセージ、言葉、お祝いで返させられないことです、悔しんで悲しくなります。私は今年、人生に後悔しています。特に学校。目指したいことは他のことから目指しませんでした、学んだことはだんだんに忘れてきました、いつも人生と存在を疑問してきました。

学校で思ったよりよくしましたが、協力があんまりなく、一生懸命に全ての科目で頑張っていない。日本語と複雑の数学で思ったより低くてちょっとがっかりしましたが。一番大事なことはよくできて今年より来年に頑張ってみます。

今年は残念に結論しませんでしたが。恵みと幸せは人生に来ました。まず、１８歳になったので正式に成年です。そして、5月で家族でもう一つの弟を孕んで来ました。最後に、友達と家族とたくさんの旅行をしまして一期一会の経験は忘れられないことです。

このアドカレの投稿は予想以下ですが、管理者はまた書かせてもらってありがとうございますって言って、そして仲良くした友達は鯖（サーバー）で数年前に忘れられない経験と楽しみをしてありがとうございました。

メリークリスマス！良いお年を！

（追伸、あらかじめ日本語が下手くそなんですよ。大変申し訳ございません！）`],
    },
  },
  {
    day: 17,
    jp: {
      userID: '441283734214279178',
      data: [`# 時間の流れ

僕にとって、この世ではもっとも怖いものは時間の流れなのだ。子供の時、毎日を無駄にしても平気だと思った。一年間すら永遠のように感じたから。なのに、知らないうちに大人になってしまって、その心配せず毎日を過ごした僕は去って今の二十歳である殻の僕が残る。

記憶が悪いってなんでだろうか。小学校の時、中学校の時、コミカレ【短期大学】の時、大学での去年までの思いでは全て影の様だ。同級生の顔が霞んで名前さえ忘れちゃって、不公理だと分かっているのに罪悪感を感じる。その日々、全力でちゃんと生きていたのか？どうだろう。

今年、四年前このサーバーで出会った大切な友達ドラゴが事故で亡くなった。そいつのおかげで今まで日本語を勉強し続けていたんだ。ドラゴは言語学が熱心に好きで、大学の専攻とした。メッセージがいつも陽気な書き方で書かれていた。特別な人間だった。偶にお互いに大学生活などで忙しくなってあまり話せなかったけど、本当の友達だった。

今夏ある日、最後のメッセージから長い間になってどこかから違和感を感じた。それで、ドラゴの本名を検索したらあいつが数週間前行方不明だって記事が出た。その一瞬間で、いつかリアルで会える希望、いつか一緒に日本に旅行する希望、その全部が瞬時に消えた。彼の家まではそんなに長い距離ではないのでいつも会いに行けると思った。その時までなんとか会おうとしなかったって本当に後悔する。それより、どんな友達だったか忘れたくない。本名をお互いに伝えたってよかったんだ。そうしなかったら、決して何があったか知れなかっただろう。

皆さん、長い間話したことがない友達がいるなら、連絡してください。近くに住んでいるのに会う機会がなかったのなら、いつがいいか相談してください。

しかし、怖いものかもしれないが、時間の流れは完全に悪いものではない。毎日自分のことを築き上げれば築き上げるほど、時間の流れとともに新しい自分が現れて、前より立派な人間になった変化を見て喜ぶだろう。今まで、時間を無駄にしている気がしたこそ、後悔のせいで時間の流れを恐れていたのだと思う。でもあの大きな衝撃が、自分の時間の大切さに気づかせてくれた。

来月21歳になってそしてもうすぐ大学を卒業する。その後、どうするかまだよく分からないけど、これからこそ全力で生きるつもりだ。

ドラゴの分も、一生懸命頑張ります。`],
    },
    en: {
      userID: '1279751293958881281',
      data: [`Advent Calendar 2025
December 17

Adventure of Slanginus.
~Travel to Londonia~

1.
Decades ago, when I was a French philology student in West Polonia, this happened.

It was just before Xmas holiday at my university, a woman student came to me.  Her name was Metavia, a cool boyish student.

’’Hi, Slanginus! I’ve heard you’re going to Britania on the vacation.
Will you go there alone?’’
All in Polish.

’’Yes, Meta, I always go alone somewhere during the holidays. Why?’’

’’I have a question to ask you about. 
Can I go with you?
I really want to see Britania, especially Londonia.’’

’’No. The way of my trips is not a joke.
Have a good holiday.’’

’’Slanginus, please! I want to change myself. I want to be strong like you!’’

’’You can't be like me. However, If you wanna really change urself, maybe you can try.
But I need 3 promises from you. If you can do that, we can travel together.

’’1. I won't take any responsibility about you. 
Even if you die on a road, it’s your own decision.
Talk this to your dad tonight. Will you promise?’’
’’Yes, I will.’’

’’2. Bring the smallest backpack you have. No suitcase or handbag.’’
’’Yes, I will.’’

’’3. Take a pair of sport shoes.’’
’’Yes, I will.’’

’’Let’s meet at the Station Street at 5.30AM tomorrow. Good bye.’’

Next morning, she came to that place with a small bag in warm clothes but she was wearing a pair of heavy metal boots.`,
        `2.

Our trip went very well for the first 3 days. We went through all Germania for 1 day and reached Parisia, the capital city of Francia.

We spend our 2 days in the capital of the world.

However our road was difficult on December 23. We decided to go up to Calaisia, the port for Britannia. But we couldn’t catch an easy drive at all. 

So, at 8 PM, we arrived finally in Berckia, north Francia.
The night was freezen cold, and no warm pubs or hostels were open.

We were tired of being on roads all day. Berckia was a small town. Houses around the city were quiet and not many street lights couldn't be seen. There was a church among tall trees.
I got an idea.

I rang the bell of that church. But no answer. I rang it again.

’’Oui? Who’s there?’’ 
An old French voice answered from the gate.

’’Excuse-moi, monsieur, we are travelers from Polonia and we have no hotel tonight and no food. Can you help us?’’ 
I asked the priest in French for a help. 
’’Entrez.’’
He opened us the gate and we went in.

Priest took us to a recreation-like room. There were 4 meeting tables in the center. And he gave us 2 blankets and said good night.

It was late and we both were very tired. We laid on the tables with blankets. And the emptiness of the room made it extremely cold. However, we could survive our night somehow. Metavia and I slept close together, otherwise we probably would have died of cold.`,
        `3.

3. 

Our 5th day of the trip was the hardest. Still we could arrived in Great Britannia by 4 PM.
Our boat went on smoothly. 

The thing happened when we were trying to hitchhike at 150km from Londonia.

’’Slanginus, I can't walk anymore.’’ 
Metavia said this and showed her left foot which had a blister and the skin was peeling off.
’’God, you and your heavy metal boots!’’

I did a first aid to her foot and we needed to arrive in Londonia as soon as possible.

However, arriving in the Britanny capital city didn't improve our situation.

We stayed at a staircase of a condominium near the center city, to protect us from cold winds. 
All hotels and restaurants were closed because of the Xmas period.

’’Metavia, are you okay? 
No, don't sleep here! Fuck, she need a warm place.’’

I thought and looked for an idea. And suddenly, I shouted laud.

’’Let's go to Londony Minster, the big cathedral!’’`,
        `4.

Londony Minster was one of the biggest cathedrals in Europe. 

On December 24, there was a huge messe.
When Metavia and I arrived at the cathedral, we saw a crowd of 500 people gathering there.

They were singing some Christmas church songs.
And I saw a priest in red clothes. It was Abbey.

That crowd of people had warmness and we could have a rest. 

At 11 PM, Abbey with 50 church people start walking to the gate. The Christmas messe was over.

I was standing next to Metavia. And when Abbey with his men walked in front of us in distance, something strange happened.

She pushed her way through the crowd to the front row and ran from there towards the church men.`,
        `5.

’’Metavia! No, not here!’’ 
I ran after her.
It was like all in a slow motion.

Metavia reached in front of Abbey and said in English.

’’Father, we came from Poland and we couldn't find any hotel tonight. 
Can you help us?’’

There was a deep silence when she said that.

Abbey looked at her face for a while. Then he started walking. He ignored Metavia’s demand.

50 men, then, one by one followed Abbey and walked toward to the main gate.

At that moment, something cracked in my head.
I was standing and said loud.

’’Mr. Abbey!
You can't ignore the girl like that. She came to here from Polonia by hitchhiking.
This girl asked me to change her life. And, she wants to learn English too.

You can't ignore her in this way!
Please, please, tell her something!’’

Then Abbey stopped and turned around.
He looked at Metavia and said. 

’’Welcome to Great Britannia and Merry Christmas!’’

And he went out.

The 50 church men and the crowd went out too.

After all this, I went to near Metavia and took her shoulder and we, too, walked out the cathedral.

’’You fought very well, Meta. Doing such challenges, your life will be different.’’

We walked along the river Thamesia and the only witness was the Londonia Eye Ferris wheel.`],
    },
  },
  {
    day: 18,
    jp: {
      userID: '403530541481066506',
      data: [`# アドベント・カレンダー2025年12月18日
-# この作文はただ私の意見です。

**VTuber**

画面で限り、ネットで人気が集まっています。二次元世界から霊感をしてきて、三次元世界まで影響を与えていきます。アイドルらしいかクソガキっぽいか、個人の選択肢は人々に提供されています。それはVTuberなのです。

VTuberは、普通なアイドルやエンターテイナーに比べて、どちらもキャラクターを演じることに関係があります。でも、VTuberは特徴なことがあります。まず、技術おかげで、二次元とか三次元のキャラクターで発表を送れて、本顔を発表するのは必要ではありません。だから、化粧を彩ることや美貌などなし、適当なパソコンやソフトやデバイスがファンと繋げるためには十分なのです。しかも、VTuberは、普通なアイドルやエンターテイナーより自分の秘密を守りやすいです。画面を外すと、キャラクターと演じる人を離します。もちろん、VTuberはもしいつかキャラクターを辞めなら、ただ使ってないんです。そんな便利さはVTuberでしかありません。

基本的にVTuberは、エンターテイナーのような、人目が欲しいです。ゲームしたり、歌ったり、踊ったり、雑談したりするのは典型的な活動です。コロナで、そんな活動は、人々にとして、一人ぼっちに対して凌げていました。一人でなのに、オンラインでしかつなげなくて、VTuberの明るいキャラクターおかげで鬱をよけられています。キャラクターがフェイクなのに、本人と絆は本物らしいと思います。化粧なしで、キャラクターの本気を自由に現れられます。さらに、VTuberはオンラインでいますので、ファンと直接的な活動ができます。また、そんな便利でインタラクティブな活動はVTuberでだけあります。

そんな美点がありますけれど、VTuberは、エンターテイナーと同じく弱点があります。お客さんが増えてあるのため、VTuberはもっとコミュニティーを立てるものだと思います。ファンもVTuberさんもお互いに絆が欲しいです。でも、そんな絆、実際には、本物の絆になれなく、普通な人間関係になれません。というか、ファンとVTuberさんの関係は片関係です。

一つ目、ファンにとって、一番大切なことのはキャラクターの個性です。大体人々は、明るくて、楽観的な性格のは欲しいです。しかし、普通な人間関係のは批判や怒りや悲観の部分があります。だから、普通な関係に引き換えて、VTuberはそんな積極的なキャラクターだけを提供できます。もし自分が普通な人間関係を逃げたら、限らずに、VTuberの小さめの憧れから、強迫観念に膨らんでしまう可能性があります。いつの間にか、脳裏がもう虜になってしまい、VTuberさんさえ気づけなさそうんです。

二つ目、VTuberさんにとって、VTuberさんも人間なので、人間の限りも縛られています。人間が安定的な社会関係を維持できるとされる人数の認知的な上限のは100人から250人の間であると [「ダンバー数」](https://ja.wikipedia.org/wiki/%E3%83%80%E3%83%B3%E3%83%90%E3%83%BC%E6%95%B0) の理論です。その通りで、少数のところでVTuberさんとファンがつなげやすいのです。でも、ファン数が増えれば増えるほど、安定的な関係を維持しつらくなります。結局、関係の維持か馳せることか、VTuberさんは選択を選ばなければなりません。

偉い方のように、VTuberの行動は絶対に人々に響けます。諦めずに夢を走り続けることとか、優しい耳を傾げることとか、そんな新形エンターテインメントで積極的な響きを含んでいます。だから、ファンにとって、私は次のコラボレーションを見たくて、オフ会をまたやりたくて、原作も作りたいです。結局、VTuberはまだ始まったばかりでしょう。`],
    },
  },
  {
    day: 19,
    jp: {
      userID: '224852676469456896',
      data: [`**アドベント・カレンダー 2025年12月19日**

(30分で書いたものなので、不自然な文章や間違えだらけで不十分な理屈であることは十分わかります。いつか書き続けると思います！)


人類の半分がいかなる状況でも人類が同じ種族だという事を心にかけば、私たちの世界はどうなるんでしょうか。誰もが育った環境が違えば、必然的に考え方や視点も異なるでしょう。それに文化ですね。時代にはかかわらず、文化の違いは単なる祖先達の何万年の間混ざりあって、分岐進化と同じように発展してきた帰結にすぎないです。しかし、現代育てられた人々は多く「内側」「外側」のように考えて物事を判断します。それも当然であろう。人間社会は常にそのようなシステムから発展しています。

時の経過とともに、世界の多文化に接触してきました。多文化だけでなく、十代から五十代の人にも出会え、様々な課題を共に検討しました。ほぼ毎回、私たちの素晴らしい世界について勉強になりました。紛れもないことは兎も角、真逆の意見が聞け、参考になりました。そのように何百人との会話や感想が積み重ねて、気付いていたことは沢山あります。どんな人がいるかとどれほど極端に想像しようとしても、居てももう驚かないこと。他の文化から来た人に対する偏見や先入観は大方、その文化について全く詳しくないこと。そして、ある民族や共同体を理解するために最も有効で効率的な方法は言語学習です。

人類は数万年の好奇心、交流、協力や反省、そして行動で地球の頂点まで辿り着けられた種族何です。弱点だらけの種族ですが、改良した教育システム、配慮満々の対人関係、そして深まれた自覚でなら、人類は明るい未来へ進めると信じています。`],
    },
  },
  {
    day: 20,
    jp: {
      userID: '702408310057336942',
      data: [`この前、別の話題について書きたかったけど最近の出来事についての方がいいと思います <:yotsubaHide:646739509064630284> <:roosantablind:640160264636858388> 

知っている方はもう知っているけどもう直ぐ日本に引っ越します。<:roosantagift:1326060732390838383> そんなに忙しくないのに日本語の勉強にあんまり集中できません。<:dead:755586291520766014> 例えば、読んでいる間に忘れてはいけないことを覚えてきてスマホでメモを直ぐに取ります。<:fumufumu:974619580783796234> 毎日準備しなければいけないこととか、提出しなければいけない書類があるので少しストレスが溜まっています。<:yotsubaUwah:646739509613953024> それにしても、毎日一つ一つ終わるたびに少しホッとしていて、ストレスが興奮に変わるらしいです <:yotsubaYay:743808226520203276> 

皆さんが良い気持ちで今年を終え、来年を最高の形で始められることを祈っています。良いお年をお迎えください <:yotsubaPray:849472184513855488> <:roosantayay:640160185779748864>`],
    },
    en: {
      userID: '375442834280677377',
      data: [`** Advent Calendar 2025
December 20 **

I did it.
This year Two Challenge.

DJ,travel

my Dj style is Streaming
Listening to many Music genres.
Play online DJ event.
Getting real reactions.
audience[Awosome! Good! WTF!?]
i did it!

I visit to Osaka and Yokosuka and Kamakura
Osaka was for the Expo
Yokosuka and Kamakura were just for no plans
Just eating　good food, that's all i need. Happy

Let's start to small,
Next year,i'm starting with the small Challenge too.`],
    },
  },
  {
    day: 21,
    jp: {
      userID: '855375174365741066',
      data: [`2025年12月21日<:babyshinichihi:1428634719901319199> 

皆さん、こんにちは<:bow3:702412219526414406>はいばらーです。
このサーバーに入ってからもう半年ほど経ちました。あっという間な感じもするんですけどそれなりの時間も経ったんだなと実感しつつあります。
そしてちょびっとだけ早いですが､メリークリスマスです！🎄 
2025年も残りわずかですね…
…え、もう2026年？~~ついこないだまでは2024年やったのに？~~ やっぱり時間が経つのが早く感じます<:worrybusiness:1313743732381712474>
しばらく忙しくてバタバタしてたんですけど、やっぱりクリスマスって毎年変わらずワクワクしますよね。
今やっと少し落ち着いてきて、今週から休暇もとってるのでゆっくり休みながらダラダラする予定です。
家族も遊びに来るのでみんなと再会して休みを過ごすのも楽しみです<:agasa_thumbsup:1325251378863669258> 

初めてのアドベントカレンダーとなるのですが、参加できて嬉しい反面、何を書けばいいのか全然わからなくて緊張します笑
皆さんの投稿を読んでるとどれも面白くて素敵なものたくさんで圧巻されます<:dcaiwowstare:1429229767512817796> 
とりあえず、今年で一番生きててよかったなと思えた時のことについて書かせていただきます。

小さい頃から名探偵コナンが大好きで、事あるごとに家族や友達におすすめしてきたんですけど、そのうちの1人の友人と一緒にロサンゼルスで開催されたコミコンに行った際、推しの安室さんの声優さん、草尾毅さんとお会いして話すことができました。~~サイン会のチケットのために財布とめっちゃ相談しました…~~

列に並んでる間すごい緊張しまくって「息できてる？w」って友達にツッコミされるほどで､順番が回ってくるまでの時間はゆっくりに感じるのに同時に「待ってまだ速すぎる、ﾑﾘﾑﾘﾑﾘ」って短くも感じてカオスでした笑

ついに自分の番になったその瞬間以降は、もう現実感なさすぎて記憶が曖昧なんですけど、めっちゃええ声やった<:dcrumibigbrain:1429233826785394819> 安室さんや😭 ってなったのは鮮明に覚えてます。あとサイン用に用意していた複製原画を差し出したときに「うわ、でたーー！」とリアクションしていただけたのも、面白くて印象的でした<:dcmegurelol:1429229133006639326> 安室さんファンはやっぱり多いから絶対どこかで来るんじゃないかと予想していたみたいです笑
話し方もとても丁寧で優しくて､地声は安室さんボイスとはまた少し違ってて、さすが声優さんだなって改めて感動しました。
本当に贅沢すぎる時間でした。

そんなこんなで、ただのオタクのつぶやきのような話になってしまいました<:dchidethepainconan:1429229909242544190>

さて、今年は暑さが異常に長く続きましたが、ようやく寒くなってきましたね。
皆さんもあったかくしてお過ごしください<:dchawanzasleep:1429245123375661197> 
~~(強引に締めようとしとる<:jerry:974616001893236756> )~~

ここまで読んでくださり、ありがとうございます。
皆さんにとって良い一年になりますように。`],
    },
  },
  {
    day: 22,
    jp: {
      userID: '234079514500530186',
      data: [`ニャンコが好き。猫は好きですか？本日の話題は私の猫。
これは猫、グウィンちゃんといます。
とても可愛いですの？

ダークソウルは五年前をプレイした。２０２０年はころに。最終ボスの名は薪の王グウィン。 グウィンは良い名だから私の猫の名はグウィンちゃんだ。

猫グウィンも薪の王グウィンのもう強い方ですか？

服の動詞は訓練
シャッツをグウィンに着っているか？いいえ
帽子をグウィンに被るか？ううん
靴を履くているか？違う
タイのグウィンちゃんをしめっている

グウィンにイヌハッカをクリスマスをやる。

メリクリスマス‼`,
        [{
          type: 'image',
          file: 'gwen3.jpg',
        }, {
          type: 'image',
          file: 'gwen2.png',
        }, {
          type: 'image',
          file: 'gwen1.jpg',
        }]],
    },
  },
  {
    day: 23,
    jp: {
      userID: '721183356255207526',
      data: [`『憂鬱な想い出』

君が
教えてくれたものは
僕が知らない
素敵な世界

六つの星が
織り成す言葉
それは君と
僕とを繋ぐよ

足りないものを
数えては
誰かになりたがっていた
自分のうちに輝く
光に気付かずに

六つの星たちが
互いに瞬き
物語は紡がれていく
それはこの手から伝わる
見えぬ景色さえも
描き出せるよ
それを僕らは
希望と呼んだ

夜空の星は
星座を描き
六つの星は
世界を描くよ

誰もがみんな
違ってて良い
言葉や文字も
人それぞれさ

悲しみばかり
見つめてた
君と出会う前の僕
明日に怯えるばかりで
足元見えてなくて

君に語りかける
星たちの海は
また君をどこへいざなう
まだ知らない世界へと
六つしかないけど
無限に広がる
世界をすべて
描き出せるよ

僕は目を閉じて
感じる世界は
とても不安で
怖かった
それでも君は
そこに光を
希望を見いだした

六つの星たちが
互いに瞬き
物語は紡がれていく
それはこの手から伝わる
見えぬ景色さえも
描き出せるよ
それを僕らは`],
    },
    en: {
      userID: '700992656284844053',
      data: [`**My English entry on 23 December, 2025** 
**My Short Story-“Perfect Coincidence in Japanese”**
(The two characters and the situation in this story are fiction, but the storyline is based on my Japanese experience, which is a conversation between another native Japanese speaker and me. I intentionally wrote some parts of sentences in Japanese)`,
        `・・・・・・・・
One day, Kota, who is a bookworm, and a colleague of his had been talking about some dramas during a break from work, and it was about time to go back to work.
Kota just said, gulping lukewarm tea, “Speaking of Japanese drama, a recent drama series on N＊K is the story of Yakumo Koizumi. In the latest episode, (こいずみやくもは、) 日本のかいだんで泣いてたよ.” 
The colleague raised her eyebrows and asked standing up, “Oh,… but why かいだんで?” 
He answered standing up as well, “Because he liked 日本の伝統的なかいだん and might’ve been moved by it. Maybe, he experienced it for the first time in his life.”
“He was moved by かいだん?...” she said to herself and looked a little puzzled, but soon started checking up today’s schedule of her work on her phone. 
“You know 小泉八雲[こいずみやくも], right?” he quickly added. 
She seemed to be pulling the threads of memory, and then murmured while still looking at the screen of the phone, “It feels like I’ve heard the name...hmmm.” 
The book lover, Kota said quietly, “He was a novelist, and collected old Japanese 怪談[かいだん] and translated them into English.” 
She immediately looked up from the phone and responded, “Ah, that’s 怪談 (ghost stories), not 上るほうの階段[かいだん] (stairs that you go up), right?!” He said laughing, “Aha! 階段で泣いていた (That he was crying at the stairs) was what you thought. Hahaha.”

This time, the two words かいだん are homophones, and furthermore, で has some meanings. In this case, it indicates a cause/reason on Kota’s end and a place on the colleague's end. 
At first, Kota didn't think he had to mention the details about Yakumo Koizumi, and then, he added some information after that. Meanwhile, once the image of stairs: 階段 for かいだん had come to the colleague’s mind as she heard the sounds かいだん, her thought unexpectedly got stuck to the image. 
Also they were slightly in a hurry at the end of the short break／to go back to work 
That was why they didn’t quickly realise what was going wrong.

ー The End ー
・・・・・・・・`],
    },
  },
  {
    day: 24,
    jp: {
      userID: '208546518846799883',
      data: [`失うとは一体どういうことなんだろうな。

去年、「立派な翻訳者になりたい！」と書きましたが、その夢は結局どうなったんだろう。

一番最初の切り抜きを上げてから、僕は趣味として定期的に作り続けていました。観てくれる人は少なかったんですが（再生回数１００くらいだけ）、まぁそれは当たり前ですね。始めたばかりでしたし。このくらいでも別にいいんじゃない？ だってそもそもこれは趣味で、誰も見てくれなくても大丈夫だよ！ 切り抜きを作ること自体が楽しいから、と思った記憶があります。

でも、この[動画](https://youtu.be/TWFgqHK7KE8) を上げたら、もう全部変わりました。いつもの切り抜きと比べたら特別じゃないと思ったんですが、結局その切り抜きは僕の予想よりずっと伸びて、２万回視聴を超えていました。その時はなんだか信じられませんでした。朝３時、ベッドの上で動画のスタッツを何度もリフレッシュしていました。今思い出したら、ちょっと笑います。

その日から、なんかやる気満々になってしまいました。毎日毎日、次の切り抜きは何にしようかな～とか、サムネはどうすればいいかな～とか、そんなことばかり考えていました。とてもハマっていました。気づいたら……なんか人生にめっちゃ満足していました。毎日切り抜きを作ったり、友達と遊んだり、EJLXのみんなと喋ったり、バンドで演奏したり、天音かなたの配信を観たりしていて、そういう日々は幸せでした。

一生こういう感じで、ずっと生きていけたらいいな～

……と思ったんですが、いけるわけないですね。


この部分読まなくてもいいよ～
||ある人と出会いました。この人は面白くて、いつも元気で、僕の趣味とも合っていて、とてもいい人でした。なので、この人と仲良くなっていくのは当然ですよね。もっと話したいという気持ちが、だんだん溜まっていくのも当然ですよね。会うたびに嬉しくなっていくのも当然ですよね。気づいたら、切り抜きを作ることは、もうどうでもよくなっていました。

あんまり詳しく言いたくないんですが、結局、欲しかった関係にはなれませんでした。

それはそれなりに残念ですが、最悪なのは、この人と出会う前の、幸せで満足していた人生に、もう二度と戻れないです。

だって、もう味わってしまったんですね。新しい楽しさを、新しい幸せを。それを知ってしまったから

、知らなかった世界には、もう戻れないんです。

それで、僕が失った。その幸せな日々を。||

II　天音かなた

１２月２日

仕事を休みました。僕はまだ知らなかったんですが、その日に休みを取ったのは本当によかったです。

午後３時。
眠かったので、ちょっと昼寝しようかと思って寝てしまいました。起きたらちょっとスマホをチェックしました。「ん？ Discordでめっちゃピンされてるんだけど。僕そんなに人気者か？ それとも荒らしでも出てきたのか？」

そう思いながらアプリを開きました。すると……

「ｐｋｒ、大丈夫か？ かなた卒業するよ」

おい、まじか。

ふざけんな。

天音かなたchをすぐ開いた。サムネは真っ白で、「今後の活動についてお知らせ」としか映っていない。

まじだ。

笑うしかなかった。信じられなかった。

だって、言ってたじゃん。

７０歳の婆になるまで、ずっとVTuberをやり続けたいって。

ホロライブが好きで、アイドルであることが好きだって…言ってたじゃん。

正直、なにも感じなかった。どんな感情でいいかさっぱり分からなかった。今でも分からないけど。

虚無感だった。

僕は天音かなたのいいところを、世界に見せたかった。切り抜きで。
今までの努力は……一体なんのためだったんだろう。

仕事から帰ったら、天音かなたの配信でリラックスすることも、もうできない。

「推しは推せる時に推せ」

今は分かる。

それで、僕が失った。僕の推しを。

最初の質問の答えは、今なら分かっている。

失うことは、人生の途中では当たり前のことです。
だからこそ、今持っているものは、大事にするべきなんだ。`],
    },
  },
  {
    day: 25,
    jp: {
      userID: '701827834917683260',
      data: [`僕はホラーが大好きですから、ちょっと書いてみたかったのです。まあ、初めてのですから多分全然怖くないですけど。編集やる気がなくてごめんね　ʅ（◞‿◟）ʃ
もちろん、この作品はフィクション~~ではない~~です。

１２月１日
冬はとても悲しい季節だと思い始めてしまったんだ。寒くて早く暗くなり、誰も出かけたくなくて寂しくなる季節だ。大学前の頃、気づいてなくて日々を楽に暮らした。一体いつの間に季節の変わりはこんなに影響し始めてしまったんだろう？何がこの重くて虚しい心を治せるんだろうか？誰が胸の寂しさで生まれた底なし穴を埋められるんだろうか？あの寒々しい世界を見たくない。あの陰々たる世界に生きさせられたくない。こう言うのは一年半無職の僕の思いだ。
しかし、北海道に来て以来、気が僅かに変わった。こっちは雪を欺く天使の翼から掻き毟て破られた羽が降る。丸で異世界、敷き詰めた街は静寂になり、平和である街になり、子供たちの雪玉線域になり、母なる自然の愛を込めて抱いた街になるんだと思い知ってきた。しかも、やっと仕事を見つけたので貧弱な生きる気が戻って来た。北海道の名前を知らない山にある研究施設に勤めるらしい。募集ポスターをよく読まなかったけど警備みたいな仕事だ。まあいいか、社宅も付いてるから何でもやる。

１２月２日
    今日はこのクソ施設に来てけど、もう嫌だ。バスは来ないって知ってたけどせめて歩道を作ってくれなかったのか？本当にあの森を通り抜けさせられるのしかないのか？マッタク。
明日は仕事を始まる。従来の警備員さんに会って仕事を引き受けると伝えてすごく嬉しがっていた。あの奴の顔がヒントだったら、大変そうな作業だ。僕たち意外一番近い人間は多分２０キロのでどうして警備員が必要なのか分からないけど文句を言わない。

１２月３日
    机の下に付いてた妙なノートを見つけた。丸でルールブックみたいな物だ。大事そうだからこの日記に書いておく。
「ルールを全部読んで絶対に破ってないでください。
-　夜の間にこの警備室から出ないこと。
-　日の入りの後で警備室の時計は１時間が立ちましたと映る度に監視カメラをチェックして異変をすぐに睨むこと、すぐに消えます。何かが異変は分かりやすいです。他の時計を信じてないでください、アレが騙されてみます。
-　０３：００から０５：００まで、警備室のドアにドンドン叩くのを聞く可能性があります。５回以下ならば、返事しないこと。５回以上ならば、まさに「ハルキ殿はこちらにも居ませぬ」と返事すること。
-　警備室の冷蔵庫から何も食べないこと。
-　後ろから視線を感じる時に目を閉じて動かないこと。思い出してください、あなたは一人です。」
    ただのいたずらかな。

１２月４日
    さっき監視カメラに異変を見つけた。僕が一人なんて冗談を言わないでよ。睨んでたけど消えなかった。遅すぎたかも。失敗してしまったのに何も起こらなかった。もうしかして、ルールを書く人が間違えた？

１２月５日４日
    どうして太陽が出てこない？なんだよこれ、ふざけないで。

１２月~~６日~~４日
    明日は来ない。

１２月~~７日~~４日
    明日は来ない。

１２月~~８日~~４日
    明日は来ない。後悔している。

１２月~~９日~~４日
    明日は来ない。

１２月~~１０~~日４日
    明日は来ない。怒っている。

１２月~~１１日~~４日
    明日は来ない。

１２月~~１２日~~４日
    明日は来ない。

１２月~~１３日~~４日
    明日は来ない。喜んでいる。`],
    },
    en: {
      userID: '708308026326646784',
      data: [`2025/12/25
Hi. I’m Lui. I wanted to write about this thing that changed the way I look at things. I hope you like it.

People have their own bags. 
You have your own important bags with you and I have mine. 
Whether I want to carry yours or not depends on how I feel about them. The same goes for you. 

I want to carry all of your bags.

 I want to carry yours the way you would never thought. Like I would clean it, I wouldn’t put it on the floor or anything. I want to take care of it. 

If you need to change it or put something different things in them, I would help you. I don’t care what you say about it. I would. And you should too.  

You should never be scared to ask them if they could carry it. If they wanted to, they would. Even if your bags are full of heavy things it’s always nice to know you could always try to ask for it. If you could do it they might be able to do it. So do not be scared.

Thank you so much for reading. Have a good one :)`],
    },
  },
  {
    day: 26,
    jp: {
      userID: '295746116027285525',
      data: [`こんばんは、みなさん。<a:nekoPray:769680941270433872> これは初めてのアドベント・カレンダーの投稿だ。この場合で今の好きな歌について語りたい。「白い夏と緑の自転車 赤い髪と黒いギター」

the pillowsは有名な日本のオルタナティヴロックだった。１９８９年結成して、２０２５年解散だった。3人のメンバーは山中さわお（ボーカルとギター）、真鍋吉明（ギター）、佐藤信一郎（ドラムス）だった。旧メンバーは上田ケンジ（ベース）で１９９２年まで活躍した。
２００２年8月1日に、「白い夏と緑の自転車 赤い髪と黒いギター」the pillowsの19枚目のシングルをリリースした。山中さんは歌詞を書いた。歌の中で、北海道での寂しい育ちについて話す。

自分の歌の解釈を差し上げたいの。まず、この歌は無邪気を失うという主題を論じると思う。1番目節で、「季節をちょっと引っぱり出してみたんだ 」と言る。再び思春期に帰る機会を選べると、誰でもあっと言いう間まに取ると思っている。次は、「緑の自転車 」と「黒いギター」の意味だ。自分としては、主人公のあの記憶を思い出したいと思う。

私たちはいつもの両親の愛を大切にするが、結局大人にならなくてはならないよ。2番目節で主人公は子供の頃手放せないけど、いつか手放さなくてはいけないを知っている。自分に噓をつっているのはだめだと分かっている。

3番節と４番節のテーマは拒否だ。彼は「悲しくはない」と言って、続いて「耳ふさいで唾吐いて」と言った。喜ぶふりをすると不幸になると思う。更に、人生は予測不能。それで、気持ちを切り替えることが必要だ。

５番節と６番節では、主人公が今や現実を納得している。あのスープは冷めているから、育てなくてはいけないのは分かっている。更に、彼は見てる虹がみっともないと思うから、気持ちを切り替えるのほうがいい気付く。`],
    },
    en: {
      userID: '658974602076225561',
      data: [`This year I just realised once again that everybody sucks.

Every single person has something that pokes your eyes and makes you feel nauseous making you wonder why you even bother interacting with them. People tell me I can't paint my nails and I can't grow my hair and many things that are nothing but a noise. 

They suppress your quirkiness, your opinion and your life. And people eventually get scared to even speak a word in their mind, making them very boring, plain and blank.

I like negativity because they always are the reason for changes. For example you go to the gym because you don't like the way you look or you do good deed because you hate to be the bad guy. I'd like to embrace negativity and tell you to embrace them too. Because they aren't coherently evil. We have these emotions for a reason.

Afterall, we all suck and it will always be that way. So what we all can do is to suck a bit less and enjoy being one. Because positivity can be tiring sometime.`],
    },
  },
  {
    day: 27,
    jp: {
      userID: '307678885942657046',
      data: [`アドベントカレンダー
2025年12月27日


『永遠が来ない』


必死に走ったのに
君は終電に置いて行かれた
ふらふらと立っていても
待っている永遠が来ないだろう

ちょっとさっきの忘年会は
もう一生前のように
遥か彼方に遠ざかっていく
黄身の色に染まれたバーも
愉快な声と温かな笑顔も
嘘のようにそっと消えてしまう

残っているのは
真っ暗なトンネル
電車のないレール
0時過ぎの秒針
ガラガラの駅
と突っ立っている君

待っている永遠が来ないだろう
…が

長い夜の果てに
また電車が来るんだ
描いた未来と違う
他の路線にでも乗ってみるんだ
望んでいた永遠じゃなくても
明日を抱きしめに行こう`],
    },
  },
  {
    day: 28,
    jp: {
      userID: '838341081937477673',
      data: [`**2025/12/28
**
--------------
答えなど
ないと気づきに
包まれている
--------------

クラさんが方歌の二の詩を私に任せてくれました。日本語で詩を書くのは初めてなので、何か間違いがあればすみませんでした。

--------------
昨日の目
今日の風景
身に着けて
何へ変われる
誰になりたい
--------------

今日は私の十八才の誕生日なので、「青春の終わり」をテーマにこの詩を書きました。今年は高校の最後の年だったから、大変なことも色々ありましたが、クラスメートといい思い出もたくさん作れてよかったと思います。将来について不安な気持ちがあっても、来年大学に行けるし、そこで日本語の勉強も続けられると思うので、楽しみにしています。

これからもこのサーバーのみなさんと一緒にがんばりたいと思います。よろしくお願いします！`],
    },
    en: {
      userID: '436069597603561483',
      data: [`**Advent Calendar 2025
December 28**

I think I studied languages hard this year. I would like to tell my story too, but it would be about French as well as English, so maybe next time.

So, let me go on to another thing I started doing this year-- that's a small vegetable garden in my house! Technically I don't have a garden at home, so it basically consists of some balcony planters. I started this because of the price increase, to be honest, but soon I found it fascinating to grow vegetables on my own. It's kind of funny that something like watering, thinning out, and fertilizing make me happy. I think what mattered to me was caring about something different from me and living in the same world in some different way. I've been interested in how caring can change someone's life in general. I don't know why. Maybe it is about going beyond what I know and what I can easily manage. Without them, life is just boring to me. Anyway, when that happens to me, it is still great, even if I already know how it works in principle.

Actually, I think it is similar to what is important in language learning. I have to care about what I know and what I don't know, and what I am good at and bad at doing, and help these abilities to grow naturally and generally. It's about letting myself grow just like plants in the field of that language. Good attention makes a good learner. It also requires a bit of patience though, unfortunately.

Okay, I'm actually satisfied that I barely talked about both language learning and gardening at the same time, because I wanted to:) This year has been great, and I hope I will learn more languages (and grow more plants) next year.

It's been fun talking here this year.  Enjoy the holidays and have a happy new year!;)`],
    },
  },
  {
    day: 29,
    jp: {
      userID: '128369934857273344',
      data: [`**2025・12・29**

数年前、私大学時代卒業するまで最後の学期に、時間割は普通より詰め込んでなかったし、
１日おきの授業があったからわりと楽であまり忙しくなかった。<a:bcaDerpDrawLazy:439086052758650900> 
暇なとき、歩きで４０分ほど、居場所からすこし離れたところだったが、
となりのすごく流行ってるおしゃれなレストランいっぱいある地域によく行った。

ある焼き鳥のレストラン…じゃないけどいろんなとりにくの部位をあげて
お弁当に入れるというレストランがあって、私ははやく常連になった。
とくにそのとき以前食べたことない砂肝の唐揚げ気に入った。
食感よかったし…いややぱっりわたし日本語で味を表現する言葉詳しくなくて、
アニメやテレビ番組でよくみる「おいしい」「うまっ」は十分かな。<:sunnystare:1384238384263729172> 

ところで、わたし料理がなんか下手、かも。でもひとり暮らしで仕事終わって疲れたら夕食はどうする？<:shrugsinjapanese:575689115018723339> 
そして、今のアパート日本食材の店の近くにある。だから、わたし最近丼ものとかハマってるんだ。
お肉さえあれば、シンプルにだしや酒、さしすせそとかの調味料だけでどんな丼でも作れると思う。

さっき食材を買いに行ったとき、すなぎもの袋を見かけた。
急にえぇ、私でもこれ油で揚げるかな…と思いついた。
だが、油を使って唐揚げ作る経験と道具ないからちょっと怖くて、<:bceBurntFoodWTF:993423392948633682> 
検索したら英語のレシピほとんどみつからなかった。
でもおいしく炒められたら大丈夫。<a:bcaYaya3:439050087897890827> 

冷蔵庫にはまだ残っている食材あったから、砂肝を炒めてみる日は数日後だった。
準備（と覚悟）してたら、あたらしいレシピ挑戦するときがきました。<a:CirnoDrive:1401503520271634503> 
とおもったが、にくがもう腐ってた。かわりに外食した。`],
    },
    en: {
      userID: '473013785884622848',
      data: [`**Advent Calendar 2025 ayumminu December 29 (1/3)**

Hello everyone , I'm ayumminu, call me ayu or ayumminu.
Just in case, I'll introduce myself anyone doesn't know me.
I’m Japanese and I like cycling, eating, learning new things, and studying Japanese, English, and Dutch.

I remember thinking the same thing last year, and it made me realise that I write some form of New Year’s Resolutions every year. The goals I set are always quite similar, albeit my intentions are sincere, such as speaking more English fluently or committing more time to study every day. This time, instead of starting with goals, I want to reflect on my English journey so far, also as a way to introduce myself. To look toward the future, it’s essential to first look back!

One day about six years ago, a junior from my art university said to me, “I think ayu-senpai would absolutely love this cartoon, Steven Universe, give it a try! Although I prefer Adventure Time, I’d love to hear your thoughts if you like both.”
This is the dawn of my journey toward learning English.
Fortunately, I had a cable TV at the time, so I was able to watch both. I watched them ceaselessly. First in Japanese audio, memorising the entire story, and then a second time in English audio, noticing how the nuances differed.
Although, I couldn’t fully understand the English audio, it made me really eager to learn more. The only English I could truly express was, “Hello! Nice to meet you. I was born. I can fly.”
Then I came across an app, Duolingo and found the link of this server there. After studying English for about a year, I noticed that the vocabulary I knew had increased. When I watched the same story of cartoon again, I realised I could understand the story better than before. Somehow, the words really resonated with me.`,
        `**Advent Calendar 2025 ayumminu December 29 (2/3)**

I didn’t just watch those cartoons,I also watched others with great enthusiasm, googled foreign voice and stage actors, and studied English by listening to their podcasts. I truly wanted to understand what foreign actors were saying, and I found studying English enjoyable.

Also, I realised that having a genuine passion for something can motivate me to act with energy and enthusiasm.
Upon reflection, I realised I should've practised writing and speaking in English more back then, what is commonly referred to as output.

I decided to increase my opportunities to actually speak English, so I began taking an online English lesson.
The English I spoke in that online lesson sounded unmistakably Japanese.
At the time, I couldn’t tell the difference between “TH” and “S” or “L” and “R”. That’s why I practised English pronunciation with Discord friends from this server on weekends, and sometimes on weekdays too. I really talked with so many people online, and it was a lot of fun!
Not only that, I also delved into Old English, Middle English, language families, and portmanteau words, I really googled all sorts of things to learn as much as I could. I realised the wisdom of knowing my own ignorance. In addition, I repeatedly did do-overs of reading aloud/Ondoku, frustrated with my own ability. My original driving force was simply to enjoy cartoons in English, but as I studied, I realised there are many ways to enjoy it.`,
        `**Advent Calendar 2025 ayumminu December 29 (3/3)**

In order to get more exposure to English and more opportunities to speak, I decided to cancel the online English lesson I had been taking and start another English lesson offered through my company, which seemed cheaper and more effective. I'm still enrolled in the online English lesson. Since I don’t speak English every day, I feel I need to shift away from days without practice and establish a daily speaking routine.
For instance, even if I set a goal for next year like “speak English for an hour every day! write about my daily life and thoughts in English every day!” I’m really not confident I could achieve them. A more realistic approach might be to engage with English every day, "reading something, listening to something, and speaking something". It’s important to set conservative goals at the beginning to ensure steady progress. I might also consider aiming to obtain an English qualification.

A few years ago, I came across a slew of things I didn’t understand in English, which sparked my desire to learn. I expect to keep encountering new things I don’t understand, and I want to continue studying English with enjoyment and passion, since language learning never truly ends. I look forward to continuing this endless odyssey of learning English with passion and joy.

-----
Thanks for reading! I guess some of you may have been expecting tips on “How to behave as a cute dog” or “How to establish myself as the office mascot dog” I might write about them if I get the chance🐶 
Anyways thank you so much<:yotsubaPray:849472184513855488>`],
    },
  },
  {
    day: 30,
    jp: {
      userID: '317491770114048000',
      data: [`12月・30日
やっと今年が終わり、新年へ向かってくる。１２ヶ月だけが経ったのに私の精神と身体がなんか変わっていった。あの気持ちが湧いてくるのは数年ぶりだった。嬉しさと誰よりも高嶺に到達したい渇望。まずは、１月中旬頃、ピアノの弾き方を思い出して、楽譜の読み方から始め、数ヶ月後好きな曲を弾けるまで成長した。それから音楽理論をもっと知りたいので、教科書を集めて少しずつ読みながら書いてあったエクササイズをやった。まるでピアノの弾き方を覚えている時よりも音楽理論の理解が一段と深まった気がした。楽譜作成アプリの使い方を覚えたし、現在の能力が足りなくても、曲の理想の音を再現できるなんて何度も、何度も助かった。「それみたいに弾ける」と自分を奮い立たせ、始めから百回やり直しても到達できる高嶺と分かっている。ただ自分のために弾いても、私が嬉しくなると信じていた。

８月にボーカルトレーニングし始めた。ピアノだけに限りたくないし、自分の曲を作りたい場合、自力でがち歌いたいんだ。ボーカルの先生との最初のレッスンが意外と厳しかった。ピアノのスケールから弾いて、私がノートを真似することだと思ったのに、現実は人体解剖学の講義から始めて、筋力と体力の全てを尽くして、教えたエクササイズをやってみた。私のボロボロの姿を見ながら、先生が「出た音が悪くないよ。しかし、あなたの身体が弱すぎてこのまま続けないんです。シャワーでの歌い手に過ぎないやつを受け入れたくないんです。いずれライブハウスのステージに歌うことを目指したい者を期待するから。ほら、本棚に並んでいるCDを見て。私の応援を通して有名になったバンドだよ。あなたから求めるのは真面目さと情熱だ。一週間によく考えて、何にするかと決めたら私に電話かけなさい」と言われた。私がライブハウスで演奏できるって？常識人ならば、これで縁を断っていつもよりの仕事や趣味に戻ろうと決めるはずだ。ライブハウスで演奏するのが今の仕事よりもっと楽しいし、仕事の給料で自分の能力を向上したいんだ。一週間後、先生を電話かけて「身体を鍛えた次第、レッスンを続けたい」と言われた。そこでパーソナルトレーナーを雇って一週４回にブートキャンプ並の運動をしていたままで4ヶ月を経った。身体が吐かせるほどの痛さを感じても、朝の４時に起きて、４時間に運動して、仕事場に通勤していた。１２月にボーカルの先生を連絡して、レッスンを予約した。音質がよくなり、喉頭を壊せずにメタルとロックの叫びと吠えできるようになった。え？言い忘れたかな～。先生はただの合唱の先生じゃないよ。先生は様々なジャンルを渡って、有名なミュージシャンのボイスコーチ兼ボーカリストとして目指している弟子のキャリアを支える人だ。これからは私の情熱、気概、渇望次第だと実感した。ボーカリストに限りなく、エンジニアやら弁護士やら医者などに役に立つアドバイスだろう。あの蘇った渇望のお陰でJLPT　N2を受けて、今の日本語能力を試してみた。不合格か合格かに関わらず、あのくだらない試験に悲しませないよ。８年間の経験を通じてうんと成長していたと分かっているから。これからも日本語の勉強を続けて曲の歌詞に日本語で書きたいんだ。

さぁ、みんな。情熱を湧いて、先に行きましょう！`],
    },
  },
  {
    day: 31,
    jp: {
      userID: '953292724193357854',
      data: [`Advent Calendar
2025/12/31

**言語学習者からしてもASMRは最強コンテンツ説**

リスニングが苦手で、困っていませんか？

私もです。（嘘）

どうも、ASMR愛好家のkashiです。

長年Discordの日本語学習コミュニティに居座っていて、一つわかったことがあります。

日本語学習者はほとんど、**リスニングの練習が非常に不足している**ということです。

私の日本人の友達と知り合い、よく観ている配信者、VTuberからも同じ意見を耳にすることが多いのです。英文を見て、基本何を言っているか想像はつくし、難なく読めるときもあるのに、リスニングになると全然駄目だと。

わかります。（本当）

リーディングは自分のペースで出来ますし、知らない単語を調べるのも楽。リスニング特有の、ネイティブのマシンガントークについていけなくなるという心配もない。その他、メモを取ったり、Ankiカードを作ったりすることも簡単です。

それに対し、リスニングは私たちリスナーを待っててくれないのです。頭に入ってくる呪文を必死に解読しようとする私たちを尻目に、リスニングはいつも先を行き、私たちを置いていくのです。

ですが、それもコンテンツの種類によります。

ここでASMRのご登場です。

ASMRが一体何なのか、まったくわからない方もいますし、ASMRというジャンルに対して誤解をしたり、偏見を持ったりする方も多いので、ここで詳しくご紹介したいと思います。

ASMR（autonomous sensory meridian response）、日本語に訳すと自律感覚絶頂反応、もしくは、自律感覚経絡反応。漢字と横文字が多くて怖い！と思った方に朗報です。これらの用語は全然覚えなくて良いですし、いや、むしろ忘れてください。ASMRというアルファベット4文字を頭に入れていただければオッケーです。MBTIの正確タイプみたいで覚えやすいのではないかと思います。

ここで言うASMRはずばり、**聞くと気持ちが良い声や音**、そしてそれらをメインとするコンテンツのことを指します。ASMRと聞くと、耳かきやマッサージのイメージを思い浮かべる人が多いかと思いますが、なんとそれだけではないのです。ASMR雑談やシチュエーションボイスをメインコンテンツとするチャンネルもありますし、しかもそれが近年、かなり増えてきています。英語、日本語、もしくは私の知らない言語を勉強しているあなたに、こちらのものをおすすめしたいです。

---

学習者からして、ASMRの良いところをわかりやすく解説するために、箇条書きでまとめてみました。

① ゆっくりペースで、発音がわかりやすい

YouTubeにある大量の雑談配信やVlogと違って、ASMRの配信・動画は比較的**ゆっくりペース**ですし、コンテンツの性質上、ほとんどのASMRクリエイターは発音がよく、「リスニング中、**音を正しく認識できない**、単語同士が繋がるから元がわからない」という悩みを持っている方にかなりフィットしています。

② ASMRを聴いていると気持ちが落ち着く（ようになる）

ASMRを聴くようになると、やがて脳内で「ASMR＝落ち着く」という結びつきが形成されます。ASMRを聴いているうちは自分がそのコンテンツをどれぐらい理解しているのかを気にしなくなりますし、多少ペースが速かったり、知らない単語が出てきたりしても、「ついていけない」とストレスを感じることもなくなります。言語ではなく、まるで**音楽のように**、そのコンテンツを**できるだけ楽しく**消費し、言語習得の自然な流れに身を任せることができます。

③ ジャンルの幅が広い（特にシチュボ）

シチュエーションボイス（略してシチュボ）は、**特定のシチュエーション（設定）**で、声優・配信者・VTuberなどが**（ほぼ）音声のみで演じる**コンテンツのことを指します。日本語ではASMRとシチュボとで区別をつけたりするのですが、本記事では、シチュボもASMRの一種類として扱います。

シチュボはASMR雑談と違った良さがあり、話題の幅の広さを誇る雑談に対して、シチュボは雑談ではまず味わえない、フィクションの世界に触れることができます。日常会話だけでなく、例えばファンタジー系のものであれば、「イケメン女騎士団長に告白される」などといったような非常に細かい設定で、ファンタジーものでよく見かける用語が多用されているため、**ファンタジーやSF小説・アニメを理解できるようにする**ための第一歩にもなりますので、「用語が多くてしんどい」などと苦戦している方におすすめです。

---

スレッド内におすすめのASMRチャンネルをいくつか上げていますので、これを機に是非、ASMRを聴いてみてください！

リンク：
https://discord.com/channels/189571157446492161/1455671340794253413/1455671632596173043`],
    },
    en: {
      userID: '297635569041801217',
      data: [`Advent Calendar 
2025/12/31`,
        [{
          type: 'image',
          file: 'aoi.png',
        }]],
    },
  },
  {
    annoucement: {
      userID: '208546518846799883',
      data: [`And with that, we have officially come to the end of 2025's edition of the Advent Calendar event!<:GyeoulPunch:1449620823102197862> 

Thank you to everyone who participated and shared, as well as those who read and reacted to the daily entries <a:CatJammingFast:799315214805499934> It's thanks to you all that the event managed to be a success

With this event, we hope that everyone had a chance to reflect on their 2025, look back on their language learning progress and now be able to look forward to 2026<:roosantayay:640160185779748864> 

The advent calendar channel will be archived soon and the special roles will last until the end of January. But for now, a thread will be opened here to celebrate! I'll also be posting some cool stats regarding the event<:EveThumbsUp:1449621950069735504>`],
    },
  },
]

export default entries
