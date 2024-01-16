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
};

const coucou = async (req, res) => {
    return res.status(200).json({success: true});
}

async function fetchdata(){
    const result = await fetch(url+merchant+reference+amount+narration+mcc, options, {
        mode: "no-cors"
    });
    var res = await result.json();
    return res;
};

const start = async (req, res) => {
    try{
        const result = await fetch(url+merchant+reference+amount+narration+mcc, options, {
            mode: "no-cors"
        });
    }catch (error) {
        console.error('Erreur lors de l\'initialisation du paiement :', error);
        res.status(500).json({ success: false, message: 'Une erreur est survenue lors de l\'initialisation du paiement.' });
    };
};

module.exports = {
    coucou,
};
