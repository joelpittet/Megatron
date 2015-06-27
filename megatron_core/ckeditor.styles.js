/*
Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/*
 * This file is used/requested by the 'Styles' button.
 * The 'Styles' button is not enabled by default in DrupalFull and DrupalFiltered toolbars.
 */
if(typeof(CKEDITOR) !== 'undefined') {
    CKEDITOR.addStylesSet( 'drupal',
    [
            // Block Styles */

            // These styles are already available in the "Format" drop-down list, so they are
            // not needed here by default. You may enable them to avoid placing the
            // "Format" drop-down list in the toolbar, maintaining the same features.
            /*
            { name : 'Paragraph'		, element : 'p' },
            { name : 'Heading 1'		, element : 'h1' },
            { name : 'Heading 2'		, element : 'h2' },
            { name : 'Heading 3'		, element : 'h3' },
            { name : 'Heading 4'		, element : 'h4' },
            { name : 'Heading 5'		, element : 'h5' },
            { name : 'Heading 6'		, element : 'h6' },
            { name : 'Preformatted Text', element : 'pre' },
            { name : 'Address'			, element : 'address' },
            */

            //{ name : 'Blue Title'		, element : 'h3', styles : { 'color' : 'Blue' } },
            //{ name : 'Red Title'		, element : 'h3', styles : { 'color' : 'Red' } },

            // Inline Styles */

            // These are core styles available as toolbar buttons. You may opt enabling
            // some of them in the "Styles" drop-down list, removing them from the toolbar.
            /*
            { name : 'Strong'			, element : 'strong', overrides : 'b' },
            { name : 'Emphasis'			, element : 'em'	, overrides : 'i' },
            { name : 'Underline'		, element : 'u' },
            { name : 'Strikethrough'	, element : 'strike' },
            { name : 'Subscript'		, element : 'sub' },
            { name : 'Superscript'		, element : 'sup' },
            */

            //{ name : 'Marker: Yellow'	, element : 'span', styles : { 'background-color' : 'Yellow' } },
            //{ name : 'Marker: Green'	, element : 'span', styles : { 'background-color' : 'Lime' } },

            //{ name : 'Big'				, element : 'big' },
            //{ name : 'Small'			, element : 'small' },
            //{ name : 'Typewriter'		, element : 'tt' },

            //{ name : 'Computer Code'	, element : 'code' },
            //{ name : 'Keyboard Phrase'	, element : 'kbd' },
            //{ name : 'Sample Text'		, element : 'samp' },
            //{ name : 'Variable'			, element : 'var' },

            //{ name : 'Deleted Text'		, element : 'del' },
            //{ name : 'Inserted Text'	, element : 'ins' },

            //{ name : 'Cited Work'		, element : 'cite' },
            //{ name : 'Inline Quotation'	, element : 'q' },

            //{ name : 'Language: RTL'	, element : 'span', attributes : { 'dir' : 'rtl' } },
            //{ name : 'Language: LTR'	, element : 'span', attributes : { 'dir' : 'ltr' } },

            /* Object Styles */
            
            // TEXT VARIANTS
            {
                    name : 'H2: Light',
                    element : 'h2',
                    attributes :
                    {
                            'class' : 'light'
                    }
            },
            {
                    name : 'H3: Light',
                    element : 'h3',
                    attributes :
                    {
                            'class' : 'light'
                    }
            },
            {
                    name : 'H4: Light',
                    element : 'h4',
                    attributes :
                    {
                            'class' : 'light'
                    }
            },
            {
                    name : 'P: Lead',
                    element : 'p',
                    attributes :
                    {
                            'class' : 'lead'
                    }
            },
            {
                    name : 'P: Footnote',
                    element : 'p',
                    attributes :
                    {
                            'class' : 'note'
                    }
            },
            
            
            // BUTTONS
            {
                    name : 'Button',
                    element : 'a',
                    attributes :
                    {
                            'class' : 'btn btn-primary'
                    }
            },
            {
                    name : 'Button: Small',
                    element : 'a',
                    attributes :
                    {
                            'class' : 'btn btn-primary btn-mini'
                    }
            },
            {
                    name : 'Button: Large',
                    element : 'a',
                    attributes :
                    {
                            'class' : 'btn btn-primary btn-large'
                    }
            },
            
            /*
            
            {
                    name : 'Animated Button',
                    element : 'a',
                    attributes :
                    {
                            'class' : 'btn btn-primary wow fadeInUp',
                            'data-wow-duration' : '.75s',
                            'data-wow-delay' : '.45s'
                    }
            },
            {
                    name : 'Animated Button: Small',
                    element : 'a',
                    attributes :
                    {
                            'class' : 'btn btn-nursing btn-mini wow fadeInUp',
                            'data-wow-duration' : '.75s',
                            'data-wow-delay' : '.45s'
                    }
            },
            {
                    name : 'Animated Button: Large',
                    element : 'a',
                    attributes :
                    {
                            'class' : 'btn btn-nursing btn-large wow fadeInUp',
                            'data-wow-duration' : '.75s',
                            'data-wow-delay' : '.45s'
                    }
            },
            
            */
            
            {
                    name : 'Secondary Button',
                    element : 'a',
                    attributes :
                    {
                            'class' : 'btn btn-secondary'
                    }
            },
            {
                    name : 'Secondary Button: Small',
                    element : 'a',
                    attributes :
                    {
                            'class' : 'btn btn-secondary btn-mini'
                    }
            },
            {
                    name : 'Secondary Button: Large',
                    element : 'a',
                    attributes :
                    {
                            'class' : 'btn btn-secondary btn-large'
                    }
            },
            
            /*
            {
                    name : 'Alt Animated Button',
                    element : 'a',
                    attributes :
                    {
                            'class' : 'btn btn-nursing-secondary wow fadeInUp',
                            'data-wow-duration' : '.75s',
                            'data-wow-delay' : '.45s'
                    }
            },
            {
                    name : 'Alt Animated Button: Small',
                    element : 'a',
                    attributes :
                    {
                            'class' : 'btn btn-nursing-secondary btn-mini wow fadeInUp',
                            'data-wow-duration' : '.75s',
                            'data-wow-delay' : '.45s'
                    }
            },
            {
                    name : 'Alt Animated Button: Large',
                    element : 'a',
                    attributes :
                    {
                            'class' : 'btn btn-nursing-secondary btn-large wow fadeInUp',
                            'data-wow-duration' : '.75s',
                            'data-wow-delay' : '.45s'
                    }
            },
            */
            
            // LISTS
            {
                    name : 'Checklist',
                    element : 'ul',
                    attributes :
                    {
                            'class' : 'checklist'
                    }
            },
            {
                    name : 'Checklist: Ordered List',
                    element : 'ol',
                    attributes :
                    {
                            'class' : 'checklist'
                    }
            },

            
            // IMAGES
            {
                    name : 'Image',
                    element : 'img',
                    attributes :
                    {
                            'class' : 'thumbnail'
                    }
            },
            {
                    name : 'Image: Left',
                    element : 'img',
                    attributes :
                    {
                            'class' : 'thumbnail pull-left'
                    }
            },
            {
                    name : 'Image: Centered',
                    element : 'img',
                    attributes :
                    {
                            'class' : 'thumbnail img-center'
                    }
            },
            {
                    name : 'Image: Right',
                    element : 'img',
                    attributes :
                    {
                            'class' : 'thumbnail pull-right'
                    }
                    
                  /*
            },
        
            {
                    name : 'Animated Image',
                    element : 'img',
                    attributes :
                    {
                            'class' : 'thumbnail wow fadeInUp',
                            'data-wow-duration' : '.75s',
                            'data-wow-delay' : '.45s'
                    }
            },
            {
                    name : 'Animated Image: Left',
                    element : 'img',
                    attributes :
                    {
                            'class' : 'thumbnail wow fadeInUp pull-left',
                            'data-wow-duration' : '.75s',
                            'data-wow-delay' : '.45s'
                    }
            },
            {
                    name : 'Animated Image: Centered',
                    element : 'img',
                    attributes :
                    {
                            'class' : 'thumbnail wow fadeInUp img-center',
                            'data-wow-duration' : '.75s',
                            'data-wow-delay' : '.45s'
                    }
            },
            {
                    name : 'Animated Image: Right',
                    element : 'img',
                    attributes :
                    {
                            'class' : 'thumbnail wow fadeInUp pull-right',
                            'data-wow-duration' : '.75s',
                            'data-wow-delay' : '.45s'
                    }
                    
                    */
            }
                        
    ]);
}