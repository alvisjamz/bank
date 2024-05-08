<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class ClientController extends Controller
{
    public function storeClient(Request $request) {
        $client = Client::find($request->id);
            if (!$client) {
                $client = new Client();
            }
            $client->username = $request->username;
            $client->email = $request->email;
            $client->password = Hash::make($request->password);
            $client->save();  
            
        // Auth::login($client);
    }

}
