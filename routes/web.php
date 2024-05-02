<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;


Route::get('/{vue?}', [HomeController::class, 'index'])->where('vue', '[\/\w\.-]*');

require __DIR__.'/auth.php';
