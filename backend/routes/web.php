<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->group(['prefix' => 'employees'], function () use ($router) {
    $router->get('', 'Controller@getAllEmployees');
    $router->delete('{id}', 'Controller@deleteEmployee');
    $router->put('{id}', 'Controller@updateEmployee');
    $router->post('', 'Controller@storeEmployee');
    $router->put('/show/{id}', 'Controller@updateVisibility');

});

// $router->get('/employees', 'Controller@getAllEmployees');
// $router->delete('/employees/{id}', 'Controller@deleteEmployee');

