// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-概要",
    title: "概要",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-論文",
          title: "論文",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-研究",
          title: "研究",
          description: "主に赤方偏移6以上の遠方銀河に関する理論研究を行っています。",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-履歴書",
          title: "履歴書",
          description: "updated October 2025.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-学会発表",
          title: "学会発表",
          description: "* indicates invited talks",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "nav-アウトリーチ等",
          title: "アウトリーチ等",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/leadership/";
          },
        },{id: "nav-about-me",
          title: "About me",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/personal/";
          },
        },{id: "post-a-post-with-image-galleries",
      
        title: "a post with image galleries",
      
      description: "this is what included image galleries could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/photo-gallery/";
        
      },
    },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
      
        title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
      section: "Posts",
      handler: () => {
        
          window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
        
      },
    },{id: "post-a-post-with-tabs",
      
        title: "a post with tabs",
      
      description: "this is what included tabs in a post could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/tabs/";
        
      },
    },{id: "post-a-post-with-typograms",
      
        title: "a post with typograms",
      
      description: "this is what included typograms code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/typograms/";
        
      },
    },{id: "post-a-post-that-can-be-cited",
      
        title: "a post that can be cited",
      
      description: "this is what a post that can be cited looks like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/post-citation/";
        
      },
    },{id: "post-a-post-with-pseudo-code",
      
        title: "a post with pseudo code",
      
      description: "this is what included pseudo code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/pseudocode/";
        
      },
    },{id: "post-a-post-with-code-diff",
      
        title: "a post with code diff",
      
      description: "this is how you can display code diffs",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/code-diff/";
        
      },
    },{id: "post-a-post-with-advanced-image-components",
      
        title: "a post with advanced image components",
      
      description: "this is what advanced image components could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/advanced-images/";
        
      },
    },{id: "post-a-post-with-vega-lite",
      
        title: "a post with vega lite",
      
      description: "this is what included vega lite code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/vega-lite/";
        
      },
    },{id: "post-a-post-with-geojson",
      
        title: "a post with geojson",
      
      description: "this is what included geojson code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/geojson-map/";
        
      },
    },{id: "post-a-post-with-echarts",
      
        title: "a post with echarts",
      
      description: "this is what included echarts code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/echarts/";
        
      },
    },{id: "post-a-post-with-chart-js",
      
        title: "a post with chart.js",
      
      description: "this is what included chart.js code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/chartjs/";
        
      },
    },{id: "post-a-post-with-tikzjax",
      
        title: "a post with TikZJax",
      
      description: "this is what included TikZ code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/tikzjax/";
        
      },
    },{id: "post-a-post-with-bibliography",
      
        title: "a post with bibliography",
      
      description: "an example of a blog post with bibliography",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/post-bibliography/";
        
      },
    },{id: "post-a-post-with-jupyter-notebook",
      
        title: "a post with jupyter notebook",
      
      description: "an example of a blog post with jupyter notebook",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/jupyter-notebook/";
        
      },
    },{id: "post-a-post-with-custom-blockquotes",
      
        title: "a post with custom blockquotes",
      
      description: "an example of a blog post with custom blockquotes",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/custom-blockquotes/";
        
      },
    },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
      
        title: "a post with table of contents on a sidebar",
      
      description: "an example of a blog post with table of contents on a sidebar",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/sidebar-table-of-contents/";
        
      },
    },{id: "post-a-post-with-audios",
      
        title: "a post with audios",
      
      description: "this is what included audios could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/audios/";
        
      },
    },{id: "post-a-post-with-videos",
      
        title: "a post with videos",
      
      description: "this is what included videos could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/videos/";
        
      },
    },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
      
        title: "displaying beautiful tables with Bootstrap Tables",
      
      description: "an example of how to use Bootstrap Tables",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/tables/";
        
      },
    },{id: "post-a-post-with-table-of-contents",
      
        title: "a post with table of contents",
      
      description: "an example of a blog post with table of contents",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/table-of-contents/";
        
      },
    },{id: "post-a-post-with-giscus-comments",
      
        title: "a post with giscus comments",
      
      description: "an example of a blog post with giscus comments",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/giscus-comments/";
        
      },
    },{id: "post-displaying-external-posts-on-your-al-folio-blog",
      
        title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
        
      },
    },{id: "post-a-post-with-redirect",
      
        title: "a post with redirect",
      
      description: "you can also redirect to assets like pdf",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/assets/pdf/pt-br/example_pdf.pdf";
        
      },
    },{id: "post-a-post-with-diagrams",
      
        title: "a post with diagrams",
      
      description: "an example of a blog post with diagrams",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/diagrams/";
        
      },
    },{id: "post-a-post-with-twitter",
      
        title: "a post with twitter",
      
      description: "an example of a blog post with twitter",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2020/twitter/";
        
      },
    },{id: "post-a-distill-style-blog-post",
      
        title: "a distill-style blog post",
      
      description: "an example of a distill-style blog post and main elements",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2018/distill/";
        
      },
    },{id: "post-a-post-with-disqus-comments",
      
        title: "a post with disqus comments",
      
      description: "an example of a blog post with disqus comments",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/disqus-comments/";
        
      },
    },{id: "post-a-post-with-math",
      
        title: "a post with math",
      
      description: "an example of a blog post with some math",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/math/";
        
      },
    },{id: "post-uma-postagem-com-código",
      
        title: "uma postagem com código",
      
      description: "um exemplo de uma postagem em um blog com código",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/code/";
        
      },
    },{id: "post-a-post-with-images",
      
        title: "a post with images",
      
      description: "this is what included images could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/images/";
        
      },
    },{id: "post-a-post-with-formatting-and-links",
      
        title: "a post with formatting and links",
      
      description: "march &amp; april, looking forward to summer",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/formatting-and-links/";
        
      },
    },{id: "news-イタリア-ピサ-に4月から7月の4ヶ月滞在します-scuola-normale-superiore-のandrea-ferrara-教授と共同研究を行います",
          title: 'イタリア(ピサ)に4月から7月の4ヶ月滞在します。Scuola Normale Superiore のAndrea Ferrara 教授と共同研究を行います。',
          description: "",
          section: "News",},{id: "news-主著論文-nakazato-amp-amp-ferrara-2024-を投稿しました-jwstで観測されている赤方偏移10以上の紫外光で明るい銀河の起源をアウトフローで説明できるか解析的に検証しました",
          title: '主著論文(Nakazato &amp;amp;amp; Ferrara 2024)を投稿しました。JWSTで観測されている赤方偏移10以上の紫外光で明るい銀河の起源をアウトフローで説明できるか解析的に検証しました。',
          description: "",
          section: "News",},{id: "news-新しくwebpageを更新しました",
          title: '新しくwebpageを更新しました。',
          description: "",
          section: "News",},{id: "news-星団形成に関するワークショップを開催しました",
          title: '星団形成に関するワークショップを開催しました。',
          description: "",
          section: "News",},{id: "news-主著論文-nakazato-et-al-2025-を投稿しました-非常に分解能の高い銀河形成シミュレーションを用いて遠方銀河の高い-oiii-88um-cii-158umの輝線比を説明しました",
          title: '主著論文(Nakazato et al. 2025)を投稿しました。非常に分解能の高い銀河形成シミュレーションを用いて遠方銀河の高い[OIII]88um/[CII]158umの輝線比を説明しました。',
          description: "",
          section: "News",},{id: "news-京都大学-天体核教室にてセミナートークを行いました",
          title: '京都大学 天体核教室にてセミナートークを行いました。',
          description: "",
          section: "News",},{id: "news-微細構造線勉強会にて講演を行いました",
          title: '微細構造線勉強会にて講演を行いました。',
          description: "",
          section: "News",},{id: "news-北海道大学でセミナートークを行いました",
          title: '北海道大学でセミナートークを行いました。',
          description: "",
          section: "News",},{id: "news-gas-dust-mini-workshop-in-hiroshima-広島大学-にて研究発表を行いました",
          title: 'Gas/Dust Mini Workshop in Hiroshima (広島大学)にて研究発表を行いました。',
          description: "",
          section: "News",},{id: "news-日本天文学会秋季年会2025にて口頭発表を行いました",
          title: '日本天文学会秋季年会2025にて口頭発表を行いました。',
          description: "",
          section: "News",},{id: "news-博士課程を修了しました",
          title: '博士課程を修了しました。',
          description: "",
          section: "News",},{id: "news-2025年度-第20回-ロレアル-ユネスコ女性科学者-日本奨励賞-を受賞しました-リンク",
          title: '2025年度 第20回「ロレアル－ユネスコ女性科学者 日本奨励賞」を受賞しました。(リンク)',
          description: "",
          section: "News",},{id: "news-flatiron-institute-center-for-computational-astrophysics-cca-にて-ポスドク研究員として着任しました",
          title: 'Flatiron Institute, Center for Computational Astrophysics (CCA) にて、ポスドク研究員として着任しました。',
          description: "",
          section: "News",},{id: "news-prima-go-book-volume-2-にて-high-z-銀河における-pah-ダスト検出を目的とした観測提案-nakazato-et-al-2025-が掲載されました",
          title: 'PRIMA GO Book Volume 2 にて、 high-z 銀河における PAH ダスト検出を目的とした観測提案(Nakazato et al. 2025)...',
          description: "",
          section: "News",},{id: "news-主著論文-nakazato-et-al-2026-を投稿しました-シミュレーション銀河に対してダスト輻射輸送計算を行い-ダスト減光および再放射の空間的な性質を解析しました",
          title: '主著論文(Nakazato et al. 2026)を投稿しました。 シミュレーション銀河に対してダスト輻射輸送計算を行い，ダスト減光および再放射の空間的な性質を解析しました。',
          description: "",
          section: "News",},{id: "news-国際学会-from-dust-till-dawn-にて口頭発表を行いました",
          title: '国際学会 From Dust Till Dawn にて口頭発表を行いました。',
          description: "",
          section: "News",},{id: "news-日本天文学会春季年会2026にて口頭発表を行いました",
          title: '日本天文学会春季年会2026にて口頭発表を行いました。',
          description: "",
          section: "News",},{id: "news-i-gave-a-keynote-talk-at-the-ishigaki-alma-workshop",
          title: 'I gave a keynote talk at the Ishigaki-ALMA workshop.',
          description: "",
          section: "News",},{id: "news-i-gave-a-contribution-talk-at-the-jwst-tokyo-conference",
          title: 'I gave a contribution talk at the JWST-Tokyo conference.',
          description: "",
          section: "News",},{id: "projects-再電離期の星形成銀河からの輝線放射の計算",
          title: '再電離期の星形成銀河からの輝線放射の計算',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/HII_modeling/";
            },},{id: "projects-origins-of-oiii-cii-ratios-ionized-and-neutral-ism-physics",
          title: 'Origins of [OIII]/[CII] Ratios: Ionized and Neutral ISM Physics',
          description: "Using a sub-pc resolution radiative transfer simulations",
          section: "Projects",handler: () => {
              window.location.href = "/projects/OIII_CII_ratio/";
            },},{id: "projects-宇宙最初期の星団形成",
          title: '宇宙最初期の星団形成',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/SIGO/";
            },},{id: "projects-遠方銀河の塊状構造の起源",
          title: '遠方銀河の塊状構造の起源',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/clumpy_galaxies/";
            },},{id: "projects-観測結果の解釈-理論予測",
          title: '観測結果の解釈/理論予測',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/collaboration_observation/";
            },},{id: "projects-最遠方銀河での明るい紫外光の起源",
          title: '最遠方銀河での明るい紫外光の起源',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dusty_outflow/";
            },},{id: "projects-the-supersonic-project",
          title: 'The Supersonic Project',
          description: "UCLAグループとの共同研究",
          section: "Projects",handler: () => {
              window.location.href = "/projects/supersonic_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%75%72%69%6E%61.%6E%61%6B%61%7A%61%74%6F@%70%68%79%73.%73.%75-%74%6F%6B%79%6F.%61%63.%6A%70", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/yurinanakazato0207", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-0984-7713", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
