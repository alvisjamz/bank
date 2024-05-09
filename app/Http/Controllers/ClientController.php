<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class ClientController extends Controller
{
    public function storeClient(Request $request) {
        $client = User::find($request->id);
            if (!$client) {
                $client = new User();
            }
            $client->name = $request->name;
            $client->email = $request->email;
            $client->password = Hash::make($request->password);
            $client->save();  
            
    }


}
