---
page_id: Oiii_Cii_ratios
layout: page
title: "Origins of [OIII]/[CII] Ratios: Ionized and Neutral ISM Physics"
description: Using a sub-pc resolution radiative transfer simulations
img: assets/img/line_oiii_ramses.png
importance: 5
category: work
---


Recent JWST observations have revealed strong emission lines from ionized gas, while ALMA has detected both ionized and neutral gas tracers, such as [O III] 88 μm and [C II] 158 μm.

Emission-line ratios provide key diagnostics of the ISM properties. Interestingly, observations have reported that the [O III]/[C II] ratios in $$z \gtrsim 6$$ galaxies are 10–100 times higher than those in local star-forming galaxies (e.g., Harikane+2020; Algera+2025).

To quantitatively investigate the physical origins of such extreme ratios, we used galaxy formation simulations (Sugimura+2024) with a spatial resolution of 0.1 pc, including on-the-fly radiative transfer. Nakazato+25 constructed detailed emission-line models for each computational cell. These simulations successfully resolved small-scale HII regions, allowing us to accurately compute the line intensities across multiple ISM phases. As a result, we reproduced the high [O III]/[C II] ratios observed in high-z galaxies (Figure 1).

Furthermore, we found that the [O III]/[C II] ratio scales linearly with the mass and density ratios of ionized to neutral gas, and naturally decreases from high to low redshift. We also confirmed the validity of our scaling relation by deriving $$M_\mathrm{HII}/M_\mathrm{HI}$$ for observed $$z>6$$ galaxies using JWST- Hβ and ALMA-[C II] measurements (Figure 2).

<div class="row">
    <div class="col-sm mt-3 mt-md-0 text-center">
        <div style="width: 60%; margin: auto;">
            {% include figure.liquid loading="eager" path="assets/img/line_3x1_masked_LCII.png" title="example image" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</div>
<div class="caption text-center">
    Figure1: Emission-line maps of [OIII] 88μm and [CII] 158μm, and their line ratio. 
</div>  


<div class="row">
    <div class="col-sm mt-3 mt-md-0 text-center">
        <div style="width: 60%; margin: auto;">
            {% include figure.liquid loading="eager" path="assets/img/MHII_MHI_OIII_CII_V25_nHII_nHI.png" title="example image" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</div>
<div class="caption text-center">
    Figure2: The relationship between [OIII] /[CII] and M_HII/M_HI. The red stars are our simulation results, and the gray plots shows z > 6 observed galaxies.
</div>

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; text-align: center;">
  <iframe
      src="https://www.youtube.com/embed/3LINBpAfgpw"
      title="[OIII] 88µm and [CII] 158µm Emission Distribution from z=13 to 9"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
      style="position: absolute; top: 0; left: 50%; transform: translateX(-50%); width: 100%; height: 100%;">
  </iframe>
</div>
