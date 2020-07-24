<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Messaging;
use App\ReceptorMessage;
use Illuminate\Support\Facades\Mail;
use App\User;
use Auth;

class MessagingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->all();
        $message = new Messaging;
        $user = Auth::user();

        $message->id_emisor = $user->id;
        $message->message = $data['message'];
        $message->subject = $data['subject'];

        $message->save();
        if ($message->save()) {
            foreach ($data['receptor'] as $receptor) {
                $receptor_message = new ReceptorMessage;
                $receptor_message->id_user = $receptor;
                $receptor_message->status = 0;
                $receptor_message->id_message = $message->id;
                $receptor_message->save();
            }

            $emails = [];
            $count = 0;
            foreach ($data['receptor'] as $key => $value) {
                // dd($receptor);
                $user = User::findOrFail($value);
                $emails[$key] = [
                    $user->email
                ];
            }
            $data_email = [
                'body' => $data['message'],
                'subject' => $data['subject'],
                'mails' => $emails,
            ];
            // return $data_email;
            foreach ($emails as $email) {

                Mail::send('emails.sendMessages', $data_email, function ($msj) use ($data_email, $email) {
                    $msj->subject($data_email['subject'])
                        ->bcc($email);
                });
            }
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function showMessage($id)
    {
        //
        $message = Messaging::findOrFail($id);
        if ($message) {
            $user = User::findOrFail($message->id_emisor);
            $message->emisor = $user->name . " " . $user->last_name;

            $user_message = ReceptorMessage::where('id_message', $message->id)->get();
            $user_message->status = 1;
            $user_message->save();

            return $message;
        }
    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function showSentMessage()
    {
        $user = Auth::user();
        $messages = Messaging::where('id_emisor', $user->id)->get();
        if (isset($messages)) {
            $receivers = [];
            $received_messages = [];
            foreach ($messages as $key => $message) {
                $user_messages = ReceptorMessage::where('id_message', $message->id)->get();
                foreach ($user_messages as $index => $receiver) {
                    $user_sent = User::find($receiver->id_user);
                    $receivers[$index]  = [
                        'email' => $user_sent->email,
                    ];
                }
                $received_messages[$key] = [
                    'asunto' => $message->subject,
                    'destinatarios' => $receivers,
                    'fecha'  => $message->created_at,
                    'id'     => $message->id
                ];
            }
            $message->receivers = $receivers;


            return $received_messages;
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function showReceivedMessage()
    {
        $user = Auth::user();
        // return $user->id;
        $messages = [];
        $messagesReceivers = ReceptorMessage::where('id_user', $user->id)->get();
        foreach ($messagesReceivers as $key => $messagesReceiver) {
            $message = Messaging::find($messagesReceiver->id_message);
            $user = User::find($message->id_emisor);
            $message->emisor = $user->name . " " . $user->last_name;
            $messages[$key] = [
                'asunto' => $message->subject,
                'emisor' => $message->emisor,
                'fecha'  => $message->created_at,
                'id'     => $message->id
            ];
        }

        return $messages;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        //
        $data = $request->all();
        $message = Messaging::find($data['id_message']);

        $message->id_emisor = $data['id_emisor'];
        $message->message = $data['message'];
        $message->subject = $data['subject'];

        $message->save();
        if ($message->save()) {
            foreach ($data['id_receptor'] as $receptor) {
                $receptor_message = ReceptorMessage::where('id_message', $data['id_message'])->get();
                $receptor_message->id_user = $receptor;
                $receptor_message->status = 0;
                $receptor_message->save();
            }

            $emails = [];
            $count = 0;
            foreach ($data['id_receptor'] as $receptor) {
                $user[$count] = User::findOrFail($receptor);
                $emails[$count] = $user[$count]->email;
                $count++;
            }

            Mail::send('emails.register', $data, function ($msj) use ($message, $emails) {
                $msj->subject($message->subject)
                    ->bcc($emails);
            });
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
