import React, { useState } from 'react';

const InscriptionPage2 = () => {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [password2, setPassword2] = useState('');
    const [showPassword2, setShowPassword2] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }
    const togglePassword2Visibility = () => {
        setShowPassword2(!showPassword2);
    }

    return (
        <div className='flex flex-col align-middle ml-auto mr-auto'>
            <div className='flex flex-col items-baseline mt-12  gap-4'>
                <div className='flex flex-col'>
                    <label htmlFor="password" className='inter-medium'>Choisissez votre mot de passe :</label>
                    <input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} name="password" id="password" required className="rounded-2xl drop-shadow-md w-128 py-1 pl-3" />
                    <div className='flex flex-row gap-1 pl-4 mt-1'>
                        <input type="checkbox" checked={showPassword} onChange={togglePasswordVisibility} name='afficherMdp' id='afficherMdp' />
                        <label htmlFor="afficherMdp">Afficher le mot de passe</label>

                    </div>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="passwordConfirm" className='inter-medium'>Confirmer votre mot de passe :</label>
                    <input type={showPassword2 ? 'text' : 'password'} value={password2} onChange={(e) => setPassword2(e.target.value)} name="passwordConfirm" id="passwordConfirm" required className="rounded-2xl drop-shadow-md w-128 py-1 pl-3" />
                    <div className='flex flex-row gap-1 pl-4 mt-1'>
                        <input type="checkbox" checked={showPassword2} onChange={togglePassword2Visibility} name='afficherMdpConfirmation' id='afficherMdpConfirmation' />
                        <label htmlFor="afficherMdpConfirmation">Afficher le mot de passe</label>

                    </div>

                </div>
            </div>
            <div>
                <ul className='inter-semi-bold text-light-grey text-sm pl-3 mt-3'>
                    Votre mot de passe doit contenir :
                    <li className='pl-3'>- Une majuscule</li>
                    <li className='pl-3'>- Un caractère spécial</li>
                    <li className='pl-3'>- Un chiffre</li>
                </ul>
            </div>
            <div className='flex flex-row justify-center align-middle mt-2'>
                <div className='grow-0 mr-auto'>
                    <img src="./img/left-arrow.png" alt="retour" className='h-12 w-12' />
                </div>
                <div className='grow-0 ml-auto mt-auto mb-auto '>
                    <button className="px-5 py-1.5 bg-grey rounded-3xl text-white" >Suivant</button>
                </div>
            </div>

        </div>
    );
};

export default InscriptionPage2;