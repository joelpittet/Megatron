UBC CLF 7.0.4 DRUPAL THEME (aka Megatron)
=======================================

A responsive UBC CLF (Common Look and Feel) theme for Drupal 7. Created by the
UBC IT Web Services Department.

## UBC CLF 7.0 DRUPAL THEME FEATURES

### Bootstrap / CLF
Grid, menu system (click to expand), status / alerts, form elements, markup
compatible with default bootstrap markup, and no need for
conditional IE stylesheets.

### Drupal / Theme level
- Modernizr
- Unit LESS files (and uncompressed CSS for everyone else)
- Page / content type template suggestions (beyond page and blog)
- Body classes to indicate page section and path for easier theming
- HTML5 markup
- Ability to add / exclude css in .info file
- Built in support for Breakpoint module, mapping default CLF breakpoints
- Adaptive panels layouts (thanks Jens)

### Usage
- You MUST use an alternate admin theme or jQuery will be break. It is also
  recommended to use the 'edit / create content in admin theme' option on the
  /admin/appearance page. An option to toggle on or off the updated jQuery
  has been added to the theme options if you would prefer to use the
  jQuery Update module. The required version is 1.8.1+
- Unzip the content to your Drupal installation, ie for Linux RHEL6.x.
  /var/www/html/your_drupal_site/sites/all/themes/
  chown -R root:apache ubc_clf_drupal_template_7.0.2.
- Login to your Drupal website as admin --> Appearance -->
  Enable and Set as Default for UBC-CLF.

## RECOMMENDED MODULES

- Picture + Breakpoints - for assigning alternate image styles to
  Media Query breakpoints.
- Media - for inserting adaptive images into textarea fields
  (allows you to choose image style per image).
- Block Class - allows you to easily use
  ‘visible-phone / visible-tablet / visible-desktop’ type bootstrap styles on
  blocks of content.


## MODULES NOT RECOMMENDED

- Environment Indicator - breaks in jQuery versions 1.8+

