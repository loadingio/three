# Change Logs

## v0.0.2

 - in anikit renderer, support anikit 2.x ( `anikit.major >= 2` ): use step affine matrix directly without applying origin again.
   1.x behavior is unchanged. `opt.origin` is ignored for 2.x preset kits.
 - add test for anikit renderer ( `npm test` ).

## v0.0.1

 - in anikit, dont change time for correct loop counting.
