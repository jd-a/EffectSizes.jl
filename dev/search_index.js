var documenterSearchIndex = {"docs":
[{"location":"#EffectSizes.jl-1","page":"Home","title":"EffectSizes.jl","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"EffectSizes.jl is a Julia package for effect size measures. Confidence intervals are assigned to effect sizes using either the normal distribution or by bootstrap resampling. The package implements types for the following measures:","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Measure Type\nCohen's d CohenD\nHedge's g HedgeG\nGlass's Δ GlassΔ","category":"page"},{"location":"#Installation-1","page":"Home","title":"Installation","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"] add https://github.com/harryscholes/EffectSizes.jl","category":"page"},{"location":"#Examples-1","page":"Home","title":"Examples","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"julia> using Random, EffectSizes; Random.seed!(1);\n\njulia> xs = randn(10^3);\n\njulia> ys = randn(10^3) .+ 0.5;\n\njulia> es = CohenD(xs, ys) # normal CI\n-0.507, 0.95CI (-0.924, -0.089)\n\njulia> effectsize(es)\n-0.506674937960848\n\njulia> quantile(es)\n0.95\n\njulia> CohenD(xs, ys, quantile=0.99)\n-0.507, 0.99CI (-1.056, 0.042)\n\njulia> CohenD(xs, ys, 10^4) # bootstrap CI\n-0.507, 0.95CI (-0.594, -0.417)\n\njulia> ci = confint(es)\n0.95CI (-0.924, -0.089)\n\njulia> confint(ci)\n(-0.9244427501651218, -0.08890712575657417)\n\njulia> lower(ci)\n-0.9244427501651218\n\njulia> upper(ci)\n-0.08890712575657417\n\njulia> quantile(ci)\n0.95","category":"page"},{"location":"#Index-1","page":"Home","title":"Index","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"","category":"page"},{"location":"#API-1","page":"Home","title":"API","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"EffectSizes.AbstractEffectSize\nCohenD\nEffectSize\nHedgeG\nGlassΔ\nConfidenceInterval\neffectsize\nconfint\nlower\nupper\nquantile","category":"page"},{"location":"#EffectSizes.AbstractEffectSize","page":"Home","title":"EffectSizes.AbstractEffectSize","text":"AbstractEffectSize\n\nAn abstract type to represent an effect size.\n\nEffect Effect size\nSmall 0.2\nMedium 0.5\nLarge 0.8\n\nSubtypes implement:\n\nMethod Description\neffectsize returns the effect size index\nconfint returns the confidence interval\nquantile returns the confidence interval quantile\n\n\n\n\n\n","category":"type"},{"location":"#EffectSizes.CohenD","page":"Home","title":"EffectSizes.CohenD","text":"CohenD(xs, ys[, bootstrap]; [quantile=0.95])\n\nCalculate Cohen's d effect size index between two vectors xs and ys.\n\nA confidence interval for the effect size is calculated at the quantile quantile. If bootstrap is provided, the confidence interval is calculated by resampling from xs and ys bootstrap times.\n\n    d = fracm_A - m_Bs\n\nwhere m is the mean and s is the pooled standard deviation:\n\n    s = sqrtfrac(n_A - 1) s_A^2 + (n_B - 1) s_B^2n_A + n_B - 2\n\nIf m_A > m_B, d will be positive and if m_A < m_B, d will be negative.\n\nnote: Note\nHedgeG outperforms CohenD when sample sizes are < 20.\n\nExamples\n\nxs = randn(100000)\nys = randn(100000) .+ 0.01\n\nusing EffectSizes\nCohenD(xs, ys)\n\nusing HypothesisTests\nEqualVarianceTTest(xs, ys)\n\n\n\n\n\n","category":"type"},{"location":"#EffectSizes.EffectSize","page":"Home","title":"EffectSizes.EffectSize","text":"const EffectSize = CohenD\n\nSee CohenD.\n\n\n\n\n\n","category":"type"},{"location":"#EffectSizes.HedgeG","page":"Home","title":"EffectSizes.HedgeG","text":"HedgeG(xs, ys[, bootstrap]; [quantile=0.95])\n\nCalculate Hedge's g effect size index between two vectors xs and ys.\n\nA confidence interval for the effect size is calculated at the quantile quantile. If bootstrap is provided, the confidence interval is calculated by resampling from xs and ys bootstrap times.\n\n    g = fracm_A - m_Bs\n\nwhere m is the mean and s is the pooled standard deviation:\n\n    s = sqrtfrac(n_A - 1) s_A^2 + (n_B - 1) s_B^2n_A + n_B\n\nIf m_A > m_B, g will be positive and if m_A < m_B, g will be negative.\n\nnote: Note\nHedgeG outperforms CohenD when sample sizes are < 20.\n\n\n\n\n\n","category":"type"},{"location":"#EffectSizes.GlassΔ","page":"Home","title":"EffectSizes.GlassΔ","text":"GlassΔ(treatment, control[, bootstrap]; [quantile=0.95])\n\nCalculate Glass's Δ effect size index between two vectors treatment and control.\n\nA confidence interval for the effect size is calculated at the quantile quantile. If bootstrap is provided, the confidence interval is calculated by resampling from xs and ys bootstrap times.\n\n    Δ = fracm_T - m_Cs_C\n\nwhere m is the mean, s is the standard deviation, T is the treatment group and C is the control group.\n\nIf m_T > m_C, Δ will be positive and if m_T < m_C, Δ will be negative.\n\nnote: Note\nGlassΔ should be used when the standard deviations between the two groups are very different.\n\n\n\n\n\n","category":"type"},{"location":"#EffectSizes.effectsize","page":"Home","title":"EffectSizes.effectsize","text":"effectsize(es::AbstractEffectSize)\n\nReturns the effect size index.\n\n\n\n\n\n","category":"function"},{"location":"#StatsBase.confint","page":"Home","title":"StatsBase.confint","text":"confint(es::AbstractEffectSize)\n\nReturns the confidence interval of an effect size as a ConfidenceInterval object.\n\nconfint(ci::ConfidenceInterval)\n\nReturns the lower and upper bounds of a confidence interval.\n\n\n\n\n\n","category":"function"},{"location":"#EffectSizes.lower","page":"Home","title":"EffectSizes.lower","text":"lower(ci::AbstractConfidenceInterval)\n\nReturns the lower bound of a confidence interval.\n\n\n\n\n\n","category":"function"},{"location":"#EffectSizes.upper","page":"Home","title":"EffectSizes.upper","text":"upper(ci::AbstractConfidenceInterval)\n\nReturns the upper bound of a confidence interval.\n\n\n\n\n\n","category":"function"},{"location":"#Statistics.quantile","page":"Home","title":"Statistics.quantile","text":"quantile(es::AbstractEffectSize)\nquantile(ci::ConfidenceInterval)\n\nReturns the quantile of a confidence interval.\n\n\n\n\n\n","category":"function"}]
}
