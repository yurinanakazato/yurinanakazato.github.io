---
page_id: dust_attenuation_curve
layout: page
title: "Spatially resolved dust attenuation curves"
description: Using FirstLight simulations
img: assets/img/LIR_FL975.png
importance: 6
category: work
---

Investigation of dust attenuation curves is crucial to estimate physical properties of galaxies such as star formation rate and stellar masses. Recent JWST observations have enabled us to constrain dust attenuation curves at $$z > 6$$ galaxies (e.g., Shivaei et al., 2025; Markov et al., 2025).

To quantitatively investigate the dust attenuation curves of high-$$z$$ galaxies (especially "massive" galaxies with $$M_* \gtrsim 10^9\, M_\odot$$), we used zoom-in galaxy formation simulations FirstLight (Ceverino et al., 2017) and conducted post-processing dust radiative transfer (RT) calculations using SKIRT (Baes et al., 2011). We find that system-integrated attenuation curves are grayer than the Calzetti curve, even when assuming MW- or SMC-type dust. Attenuation curves of individual clumps are even grayer, while diffuse regions exhibit steeper curves owing to enhanced scattering in optically thin environments (Figure 1).

In the fixed dust composition case, the dust-star geometry and dust column density can both change the shape of the attenuation curves. However, these two factors are degenerate. To quantitatively disentangle them, we introduce an analytical model of the IRX–$$\Delta\beta$$ plane, where $$\Delta\beta$$ denotes the difference between the attenuated and intrinsic UV slopes (Figure 2). Here, the dust-to-star scale-height ratio $$R$$ and the fiducial UV optical depth $$\tau_\mathrm{UV}^\mathrm{fid}$$ parametrize the dust-star geometry and dust column density, respectively. Combining JWST and ALMA observations can constrain the attenuation curve and its geometrical effects, which ultimately leads to constraints on extinction curves.

<div class="row">
    <div class="col-sm mt-3 mt-md-0 text-center">
        <div style="width: 60%; margin: auto;">
            {% include figure.liquid loading="eager" path="assets/img/attenuation_curve.png" title="example image" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</div>
<div class="caption text-center">
    Figure 1: Left: dust attenuation curves. Right: attenuation curve slope versus V-band dust attenuation.
</div>


<div class="row">
    <div class="col-sm mt-3 mt-md-0 text-center">
        <div style="width: 60%; margin: auto;">
            {% include figure.liquid loading="eager" path="assets/img/IRX_delta_beta.png" title="example image" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</div>
<div class="caption text-center">
    Figure 2: IRX–$$\Delta\beta$$ relation with analytical model curves. Contours show simulation results for the clumpy (cyan), diffuse (orange), and system-integrated (black) components at $$z = 6$-$9$$. REBELS-IFU system-integrated data are shown for comparison.
</div>
