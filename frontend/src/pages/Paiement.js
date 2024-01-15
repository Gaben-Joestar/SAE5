import React from 'react';
import Header from '../components/Header';

const url = "http://dev.yunusfin.tech/vp_mp/ws/web/start?";
const merchant = "merchant=kHZ9Hc1lKSK7yExg";
const reference = "&reference="+makeid(18);
const amount = "&amount=3273.23";
const narration = "&narration=LPTQPremium";
const mcc = "&mcc=11.121";
const options = {
    headers: {
        "Content-type": "application/x-www-form-urlencoded",
        "Authorization" : "Bearer at_mp_web_ws"
    }
}

function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

<script>
function paiement() {                               
    fetch(url+merchant+reference+amount+narration+mcc, headers)
        .then( res => res.json() )
        .then( data => console.log(data) )
}
</script>

const Paiement = () => {
    return (
        <div>
            <Header />
            <div className='flex flex-col align-middle justify-center ml-auto mr-auto '>
                <form action="" className='flex flex-col align-middle justify-center gap-14 ml-auto mr-auto'>

                    <div className='ml-auto mr-auto inter-extra-bold '>
                        <img src="./img/grand-logo.PNG" alt="logo" className="w-3/4 ml-auto mr-auto" />
                    </div>

                    <div className='flex flex-row align-middle justify-center gap-24'>
                        <div className='flex flex-col gap-2'>
                            <h3 className='ml-auto mr-auto inter-semi-bold mb-3'>Informations Personnelles</h3>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="nom" className='inter-medium pl-3'>Nom :</label>
                                <input type="text" name="nom" id="nom" className="rounded-2xl drop-shadow-lg w-128 py-1 pl-3" />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="prenom" className='inter-medium pl-3'>Prénom :</label>
                                <input type="text" name="prenom" id="prenom" className="rounded-2xl drop-shadow-lg w-128 py-1 pl-3" />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="email" className='inter-medium pl-3'>Adresse Mail :</label>
                                <input type="email" name="email" id="email" className="rounded-2xl drop-shadow-lg w-128 py-1 pl-3" />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="numeroTelephone" className='inter-medium pl-3'>Numéro de Téléphone :</label>
                                <input type="tel" name="numeroTelephone" id="numeroTelephone" className="rounded-2xl drop-shadow-lg w-128 py-1 pl-3" />
                            </div>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <h3 className='ml-auto mr-auto inter-semi-bold mb-3' >Adresse de facturation</h3>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="adresse" className='inter-medium pl-3'>Adresse :</label>
                                <input type="text" name="adresse" id="adresse" className="rounded-2xl drop-shadow-lg w-128 py-1 pl-3" />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="ville" className='inter-medium pl-3'>Ville :</label>
                                <input type="text" name="Ville" id="Ville" className="rounded-2xl drop-shadow-lg w-128 py-1 pl-3" />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="codePostal" className='inter-medium pl-3'>Code Postal :</label>
                                <input type="number" name="codePostal" id="codePostal" className="rounded-2xl drop-shadow-lg w-128 py-1 pl-3" />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="codePostal" className='inter-medium pl-3'>Pays :</label>
                                <input type="text" name="pays" id="pays" className="rounded-2xl drop-shadow-lg w-128 py-1 pl-3" />
                            </div>
                        </div>
                    </div>


                    <div className='ml-auto mr-auto '>
                        //Vrai bouton
                        <script async
                            src="https://js.stripe.com/v3/buy-button.js">
                        </script>
                        <stripe-buy-button
                        buy-button-id="buy_btn_1OYR0XGUnAcI8KjetvS0HSny"
                        publishable-key="pk_live_51OXMcKGUnAcI8KjejGoqD9xtcVh78GOPbCwmJYSO2heha1TaWyzsWnqMx8vCtKXXjeHufSxJPHj9YI5RMxKP8IJ800DAjyWONj"
                        >
                        </stripe-buy-button>

                        //Bouton de test
                        <script async
                            src="https://js.stripe.com/v3/buy-button.js">
                        </script>
                        <stripe-buy-button
                        buy-button-id="buy_btn_1OYUdLGUnAcI8KjegizoXkCs"
                        publishable-key="pk_test_51OXMcKGUnAcI8KjeaHiIuXmwptlzbdeThMmUMt2Kzky5oM70USim3WDbCWfawtRmTN7vNLT5NgoFntRLgsZCZaDj00ZpuLSDZ9"
                        >
                        </stripe-buy-button>

                        <button onclick="paiement()">Paiement YunusPay</button>
                        
                    </div>

                </form>
            </div>

        </div>
    );
};

export default Paiement;