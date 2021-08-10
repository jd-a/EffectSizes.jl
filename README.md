# EffectSizes.jl

[![Stable](https://img.shields.io/badge/docs-stable-blue.svg)](https://harryscholes.github.io/EffectSizes.jl/stable)
[![Dev](https://img.shields.io/badge/docs-dev-blue.svg)](https://harryscholes.github.io/EffectSizes.jl/dev)
[![Build Status](https://github.com/harryscholes/EffectSizes.jl/workflows/CI/badge.svg)](https://github.com/harryscholes/EffectSizes.jl/actions)

EffectSizes.jl is a Julia package for effect size measures. Confidence intervals are
assigned to effect sizes using the Normal distribution or by bootstrap resampling.

The package implements types for the following measures:

**Measure** | **Type**
---|---
Cohen's *d* | `CohenD`
Hedge's *g* | `HedgeG`
Glass's *Δ* | `GlassΔ`

## Installation

```jl
julia> import Pkg; Pkg.add("EffectSizes");
```

## Examples

```julia
julia> using Random, EffectSizes; Random.seed!(1);

julia> xs = randn(10^3);

julia> ys = randn(10^3) .+ 0.5;

julia> es = CohenD(xs, ys, quantile=0.95); # normal CI (idealised distribution)

julia> typeof(es)
CohenD{Float64, ConfidenceInterval{Float64}}

julia> effectsize(es)
-0.5477257247459636

julia> quantile(es)
0.95

julia> ci = confint(es);

julia> typeof(ci)
ConfidenceInterval{Float64}

julia> confint(ci)
(-0.9660399771191736, -0.12941147237275363)

julia> es = CohenD(xs, ys, 10^4, quantile=0.95); # bootstrap CI (empirical distribution)

julia> effectsize(es) # effect size is the same
-0.5477257247459636

julia> typeof(es)
CohenD{Float64, BootstrapConfidenceInterval{Float64}}

julia> ci = confint(es); # confidence interval is different

julia> lower(ci)
-0.6367371804827419

julia> upper(ci)
-0.4598929721717412
```

## Contributing

Ideas and PRs are very welcome.
