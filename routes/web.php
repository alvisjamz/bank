<?php

use App\Http\Controllers\ClientController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;

Route::post('/client-register',[ClientController::class,'storeClient']);
// Route::post('/client-login',[ClientController::class,'loginClient']);

Route::get('/{vue?}', [HomeController::class, 'index'])->where('vue', '[\/\w\.-]*');

require __DIR__.'/auth.php';
