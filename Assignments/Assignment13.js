{
  /*
Chapter 10 - Jo dikhta hai vo bikta hai
Theory:
Explore all the ways of writing css.
    Native method: Writing it directly in a .css file & importing it into our Html file.
    SASS (Syntactically awesome style sheets) -> Sass is preprocessor scripting language which eventually compiles to CSS. The language of SASS is known as SassScript. The preprocessor was originally built on top of YAML.
    It works with indentations & linebreaks, and parentheses aren't needed to display nesting or semi-colons to mark line-ends. It allows to create variables, use of mathematical functions, functions, loops,mixins(templates) & case distinction(provides if-else functionality).
    SCSS (Sassy CSS)-> Here we use parentheses to denote groupings and semi-colons to declare properties. SCSS is a superset of CSS.
    LESS : SASS, Scss and Less are pre-processor based style writing options where their code has to be compiled into normal CSS and then shipped to website.
    Using packages like Bootstrap/TailswindCSS which allows to write styles along with the HTML/JSX in the same file based on the different styles avialable for them.
    Packages/Libraries like Material UI, Chakra UI, etc provide components directly which can be used directly in our JSX, but they don't allow a lot of modifications in their styles. It's difficult to debug or use a custom style on top of these components imported from UI Libraries.
    
How do we configure tailwind?
  1. Install Tailwind via npm/yarn/use cdn along with it's dependency postcss.
  2. Create .postcssrc file in project's root directory and enable tailwind plugin.
  3. Create tailwind.config.js by executing npx tailwind init which'd create the tailwind.config.js file and add add all paths to our files.
  4. Create a index.css file at ./src and add all the tailwind's base directives for each of it's layers.
  5. Import index.css to index.html(project's base/source html file).
  6. Start build and use.
In tailwind.config.js, what does all the keys mean (content, theme, extend, plugins)?
  Content-> is used to provide/configure the file directory/paths to all the files and fileTypes which tailwind will search to find Tailwind's classNames so that it can override the css.
  theme -> This is used to configure tailwind's default behaviour for different css properties like screens, colors, fontFamily, spacing, etc. If you want to keep most of tailwind's defaults and override some of them,
          then add your extensions under theme.extend key in config file. Ex: adding a new font family, theme:{extend;{fontFamily;{new: ' value of font here '}}}}. We can reuse this font style by providing className as font-'new'.
          If overriding has to be done for a default className then just add the overrides directly under the theme section.
  extend -> is used to extend default theme and new classNames which can be re-used through our app.
  plugins -> Plugins lets us register 3rd party plugins which lets us inject them into project's stylesheet by using JS instead of CSS. We'd import the plugin using require('tailwindcss/plugin'). We can install plugins via npm and then add them to the plugins array using require('pluginName/path')
Why do we have .postcssrc file?
  Since tailwind is a postcss plugin, we can use it with other preprocessors like SASS,SCSS,etc. .postcssrc allows us to add these plugins/preprocessors to our project.
Coding:
Configure Tailwind and try to build your whole app using tailwind.


*/
}