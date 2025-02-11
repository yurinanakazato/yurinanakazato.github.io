---
page_id: dusty_outflow
layout: page
title: 最遠方銀河での明るい紫外光の起源
description: 
img: assets/img/UV_bright_galaxies.png
importance: 2
category: work
giscus_comments: true
---

2022年から運用開始となった宇宙望遠鏡JWSTによって、ビッグバンからわずか数億年後にあたる高赤方偏移（z > 10）の宇宙に、理論予測を上回るほど明るい銀河（MUV < −20）が多数存在することが示唆され従来の銀河進化モデルとの食い違いが明確になってきました(例:Harikane+24, Donnan+24, Perez-Gonzalez+23)。

この問題の解決策として注目されているシナリオの一つが、dust clearingと呼ばれる現象です。若い星から放射される紫外光を塵（ダスト）が吸収・散乱し、その結果生じる輻射圧によって塵に富んだガスが吹き飛ばされるというものです。これにより、銀河が可視光や紫外線域でより明るく観測される可能性が指摘されています (Ferrara+23, 24)。Nakazato & Ferrara 24では、この現象を理論的に検証するため、塵を含むガス中で放射圧がどの程度強化されるかを解析的に推定しました。その結果、金属量 Z = 0.1Z⊙（太陽の1割程度）であっても、放射圧が標準的なエディントン限界と比べて約180倍にまで強化され得ることを示しています（図1)。

さらに、構築した解析的なモデルを実際にz > 10 で観測された銀河に適用したところ、一部の銀河は、この放射圧がピークに達し、塵やガスを吹き飛ばしている最中のアウトフロー段階にある可能性があることが分かりました。一方、観測されている銀河のおよそ80%は、既に塵を放出し終えて“クリア”な状態に達しており、そのため理論予測を上回るほど明るい紫外線光度をもつことを示唆する結果が得られました。

このような理論的研究は、JWSTによる超高赤方偏移銀河の新たな観測結果を理解するうえで重要な手がかりとなり、宇宙最初期の銀河形成史や星形成過程の解明に大きく貢献すると期待されています。  

<div class="row">
    <div class="col-sm mt-3 mt-md-0 text-center">
        <div style="width: 60%; margin: auto;">
            {% include figure.liquid loading="eager" path="assets/img/boost_factor.png" title="example image" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</div>
<div class="caption text-center">
    Figure1: The ratio of classical and modified Eddington luminosity 
    {% raw %}($A = L_\mathrm{E} /L_\mathrm{E,mod}$){% endraw %}
    as a function of gas column density 
    {% raw %} 水素柱密度 $$N_\mathrm{H}$$ と金属量 Z を変数とした、古典的エディントン光度と修正エディントン光度の比 $$\bigl(A = L_\mathrm{E}/L_\mathrm{E,mod}\bigr)$$ の分布を示す。破線の円は、z > 10 の銀河で観測される値の範囲を表しており、その領域では輻射圧が約100倍に強化されていることがわかる。
</div>
