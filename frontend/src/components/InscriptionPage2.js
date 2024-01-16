import React, { useState } from 'react';

const InscriptionPage2 = ({ onButtonClick, onReturnClick, onPasswordRecup }) => {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [password2, setPassword2] = useState('');
    const [showPassword2, setShowPassword2] = useState(false);

    const [passwordError, setPasswordError] = useState('');
    const [passwordError2, setPasswordError2] = useState('');

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        onPasswordRecup(e.target.value);
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }
    const togglePassword2Visibility = () => {
        setShowPassword2(!showPassword2);
    }

    const handlePasswordBlur = () => {
        let passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$/;
        if (passwordRegex.test(password)) {
            setPasswordError('');
        }
        else {
            setPasswordError('Le mot de passe entré ne correspond pas aux critères ');
        }
    }

    const handlePasswordBlur2 = () => {
        if (password2 !== password) {
            setPasswordError2('Le mot de passe rentré ne correspond pas au mot de passe ci-dessus');
        }
        else {
            setPasswordError2('');
        }
    }

    const isNextButtonDisabled = passwordError || passwordError2 || !password || !password2;

    return (
        <div className='flex flex-col align-middle ml-auto mr-auto'>
            <div className='flex flex-col items-baseline mt-12  gap-4'>
                <div className='flex flex-col'>
                    <label htmlFor="password" className='inter-medium'>Choisissez votre mot de passe :</label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={handlePasswordChange}
                        onBlur={(e) => {
                            handlePasswordBlur();
                            handlePasswordBlur2();
                        }
                        }
                        name="password"
                        id="password"
                        required
                        className="rounded-2xl drop-shadow-md w-128 py-1 pl-3" />
                    {passwordError && <p className=" text-red pl-3">{passwordError}</p>}
                    <div className='flex flex-row gap-1 pl-4 mt-1'>
                        <input
                            type="checkbox"
                            checked={showPassword}
                            onChange={togglePasswordVisibility}
                            name='afficherMdp'
                            id='afficherMdp' />
                        <label htmlFor="afficherMdp">Afficher le mot de passe</label>

                    </div>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="passwordConfirm" className='inter-medium'>Confirmer votre mot de passe :</label>
                    <input
                        type={showPassword2 ? 'text' : 'password'}
                        value={password2}
                        onChange={(e) => setPassword2(e.target.value)}
                        onBlur={handlePasswordBlur2}
                        name="passwordConfirm"
                        id="passwordConfirm"
                        required
                        className="rounded-2xl drop-shadow-md w-128 py-1 pl-3" />
                    {passwordError2 && <p className=" text-red pl-3">{passwordError2}</p>}
                    <div className='flex flex-row gap-1 pl-4 mt-1'>
                        <input
                            type="checkbox"
                            checked={showPassword2}
                            onChange={togglePassword2Visibility}
                            name='afficherMdpConfirmation'
                            id='afficherMdpConfirmation' />
                        <label htmlFor="afficherMdpConfirmation">Afficher le mot de passe</label>

                    </div>

                </div>
            </div>
            <div>
                <ul className='inter-semi-bold text-grey text-sm pl-3 mt-3'>
                    Votre mot de passe doit contenir :
                    <li className='pl-3'>- Au moins 8 caractères</li>
                    <li className='pl-3'>- Une majuscule</li>
                    <li className='pl-3'>- Un caractère spécial : !@#$%^&*</li>
                    <li className='pl-3'>- Un chiffre</li>
                </ul>
            </div>
            <div className='flex flex-row justify-center align-middle mt-2'>
                <div className='grow-0 mr-auto'>
                    <img src="./img/left-arrow.png" alt="retour" className='h-12 w-12' onClick={onReturnClick} />
                </div>
                <div className='grow-0 ml-auto mt-auto '>
                    <button className="px-5 py-1.5 bg-grey rounded-3xl text-white" onClick={onButtonClick} disabled={isNextButtonDisabled}>Suivant</button>
                </div>
            </div>

        </div>
    );
};

export default InscriptionPage2;