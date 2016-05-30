/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {
    // map tells the System loader where to look for things
    var map = {
        'app':                        'app', // 'dist',
        '@angular':                   'node_modules/@angular',
        'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
        'rxjs':                       'node_modules/rxjs',
        //extra used map
        'angular2-datatable':         'node_modules/angular2-datatable',
        'lodash':                     'node_modules/lodash/lodash.js',
        'angular2-cookie':            'node_modules/angular2-cookie',
    };
    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app':                          { main: 'main.js',  defaultExtension: 'js' },
        'rxjs':                         { defaultExtension: 'js' },
        'angular2-in-memory-web-api':   { defaultExtension: 'js' },
        //extra used packages
        'angular2-datatable':           { defaultExtension: 'js' },
        'angular2-cookie':              { defaultExtension: 'js' }

    };
    var ngPackageNames = [
        'common',
        'compiler',
        'core',
        'http',
        'platform-browser',
        'platform-browser-dynamic',
        'router',
        'router-deprecated',
        'upgrade'
    ];
    // Add package entries for angular packages
    ngPackageNames.forEach(function(pkgName) {
        packages['@angular/'+pkgName] = { main: pkgName + '.umd.js', defaultExtension: 'js' };
    });
    var config = {
        map: map,
        packages: packages
    }
    System.config(config);
})(this);
