# Require any additional compass plugins here.

# Set this to the root of your project when deployed:
http_path = "/_assets"
css_dir = "css"
sass_dir = "_css"
images_dir = "img"
# generated_images_dir = 'img/sprite'
javascripts_dir = "_js"
javascripts_path = "js"

# You can select your preferred output style here (can be overridden via the command line):
output_style = (environment == :production) ? :compressed : :expanded # :expanded or :nested or :compact or :compressed

# To enable relative paths to assets via compass helper functions. Uncomment:
relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
line_comments = false

# To disable the asset cache buster
asset_cache_buster :none

# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass