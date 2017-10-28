# Bootstrap Grid System
Extraction of the Twitter Bootstrap grid system (and only the grid system) in Scss form.

## Installation
#### First, copy the files into your project.

#### Then choose one of the two methods described below to finish installing the grid system.

### Method One: Use as a partial:
This method has the benefit of not producing a standalone css file when the project Scss files are processed.

Inside your main Scss file (or whichever external stylehseet you'd like to include the grid system in) add one of the following two code blocks - depending on whether or not you wish to include the **Bootstrap Reboot syles** *(you can read more about these [reboot styles here](http://getbootstrap.com/docs/4.0/content/reboot/))*.

#### Without Bootstrap Reboot Styles:
````scss
// Import the grid system.
@import "bootstrap-grid-system-partial";
````

#### With Bootstrap Reboot Styles:
````scss
// Include the reboot styles by setting the variable to 'true'
$_include-reboot: true;
// Import the grid system.
@import "bootstrap-grid-system-partial";
````

### Method Two: A standalone Scss and CSS file:
**... Documentation coming ...**

## Usage
**For now, the best resource is simply Bootstrap's own documentation on their grid system and layout overview:**

### [Bootstrap Layout Overview Documentation](http://getbootstrap.com/docs/4.0/layout/overview/) 

### [Bootstrap Grid System Documentation](http://getbootstrap.com/docs/4.0/layout/grid/)

#### (Specifically, the [Sass Mixins Section](http://getbootstrap.com/docs/4.0/layout/grid/#sass-mixins))

##### But here are a few highlights:

Mixins used in conjunction with the grid variables to generate semantic CSS for individual grid columns:

```scss
// Creates a wrapper for a series of columns
@include make-row();

// Make the element grid-ready (applying everything but the width)
@include make-col-ready();
@include make-col($size, $columns: $grid-columns);

// Get fancy by offsetting, or changing the sort order
@include make-col-offset($size, $columns: $grid-columns);
```



You can modify the variables to your own custom values, or just use the mixins with their default values. 

Here’s an example of using the default settings to create a two-column layout with a gap between:

```scss
.example-container {
  width: 800px;
  @include make-container();
}

.example-row {
  @include make-row();
}

.example-content-main {
  @include make-col-ready();

  @include media-breakpoint-up(sm) {
    @include make-col(6);
  }
  @include media-breakpoint-up(lg) {
    @include make-col(8);
  }
}

.example-content-secondary {
  @include make-col-ready();

  @include media-breakpoint-up(sm) {
    @include make-col(6);
  }
  @include media-breakpoint-up(lg) {
    @include make-col(4);
  }
}
```

... and the example markup to go with that:

```html
<div class="example-container">
  <div class="example-row">
    <div class="example-content-main">Main content</div>
    <div class="example-content-secondary">Secondary content</div>
  </div>
</div>
```


## Copyright and license
Code and documentation copyright 2011-2017 the Bootstrap Authors and Twitter, Inc. Code released under the MIT License. Docs released under Creative Commons.
