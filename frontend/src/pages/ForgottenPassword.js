import React, { useRef, useState } from 'react';
import Header from '../components/Header';
import Button from '../components/Button';

const ForgottenPassword = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [exist, setExist] = useState(true);
  const [page, setPage] = useState(0);
  const myInput = useRef(null);
  const codeInput = useRef(null);

  const bonCode = 'AAAAAA';

  const validateEmail = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setEmail(inputValue);
    setIsValid(validateEmail(inputValue));
  };

  const handleInputBlur = async () => {
    try {
      const response = await fetch(`http://localhost:3000/user/recuperer/${encodeURIComponent(email)}`);

      if (response.ok) {
        setEmailError('');
      } else {
        setEmailError("Il n'existe aucun compte lié à cette adresse mail");
      }
    } catch (error) {
      setEmailError("Erreur lors de la vérification de l'adresse mail. Veuillez réessayer plus tard.");
    }
  }

  const sendEmail = () => {
    if (isValid) {
      const myCurrentInput = myInput.current.value;
      setPage(page + 1);
      setEmail(myCurrentInput);
    }
  };

  const maskEmail = (email) => {
    const [name, domain] = email.split('@');
    const maskedName = `${name.charAt(0)}${'*'.repeat(name.length - 1)}`;
    return `${maskedName}@${domain}`;
  };

  const validerCode = () => {
    if (isActive) {
      if (codeInput.current.value.toUpperCase() === bonCode) {
        console.log('Code bon');
        setPage(page + 1);
      } else {
        setExist(false);
      }
    }
  };

  const checkValueCode = () => {
    setExist(true);
    if (codeInput.current.value.length === 6) setIsActive(true);
  };

  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [password2, setPassword2] = useState('');
  const [showPassword2, setShowPassword2] = useState(false);
  const [validPassword1, setValidPassword1] = useState(true);
  const [validPassword2, setValidPassword2] = useState(true);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const togglePassword2Visibility = () => {
    setShowPassword2(!showPassword2);
  };

  const validerMDP = () => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.*[0-9]).{8,}$/;
    if (!passwordRegex.test(password)) setValidPassword1(false);
    if (!(password === password2)) setValidPassword2(false);
    if (validPassword1 && validPassword2) console.log('tout est bon');
  };

  return (
    <div>
      <Header />
      <div className='flex flex-col justify-center items-center mt-28 text-grey '>
        <p className='text-3xl inter-extra-bold'>MOT DE PASSE OUBLIE</p>

        {page === 0 ? (
          <div className='flex flex-col justify-center items-center'>
            <p className='inter-medium'>Pas de panique</p>
            <p className='mt-8 text-clip w-128'>
              Veuillez saisir l'adresse e-mail associée au compte pour lequel
              vous avez perdu le mot de passe.
            </p>
            <input
              id='insert-email'
              className='rounded-2xl drop-shadow-md w-128 py-1 px-2 mt-6 mb-16 pl-2'
              ref={myInput}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
            ></input>
            {emailError && <p className=" text-red pl-3">{emailError}</p>}
            <div onClick={sendEmail}>
              <Button text={'Envoyer code'} isActive={isValid} />
            </div>
          </div>
        ) : page === 1 ? (
          <div className='flex flex-col items-center'>
            <p>Veuillez entrer le code qui a été envoyé à {maskEmail(email)}</p>

            <div className={!exist && 'text-red'}>
              <input
                id='saisie-code'
                className='rounded-3xl drop-shadow-md w-80 py-1 px-2 mt-6 bg-light-grey font-bold uppercase pl-20 text-3xl tracking-verywide'
                ref={codeInput}
                maxLength='6'
                onChange={checkValueCode}
              ></input>
            </div>
            {!exist && (
              <p className='text-red mt-5'>
                Il semble que le code fournit est invalide ou expiré
              </p>
            )}
            <div className={exist ? 'mt-20' : 'mt-9'}>
              <button
                className={`px-16 py-1.5 ${isActive ? 'bg-grey' : 'bg-light-grey'
                  } rounded-3xl text-white hover:shadow-md`}
                onClick={validerCode}
              >
                Vérifier
              </button>
            </div>
            <div className='flex flex-row space-x-1 text-grey mt-8'>
              <p>Code non reçu ? </p>
              <p className='inter-semi-bold'>RENVOYER le code</p>
            </div>
          </div>
        ) : (
          <div className='flex flex-col align-middle ml-auto mr-auto'>
            <div className='flex flex-col items-baseline mt-12  gap-4'>
              <div className='flex flex-col'>
                <label htmlFor='password' className='inter-medium'>
                  Choisissez votre mot de passe :
                </label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setValidPassword1(true);
                  }}
                  name='password'
                  id='password'
                  required
                  className={`rounded-2xl drop-shadow-md w-128 py-1 pl-3 text-xl ${!validPassword1 && 'text-red'
                    }`}
                />
                <div className='flex flex-row gap-1 pl-4 mt-1'>
                  <input
                    type='checkbox'
                    checked={showPassword}
                    onChange={togglePasswordVisibility}
                    name='afficherMdp'
                    id='afficherMdp'
                  />
                  <label htmlFor='afficherMdp'>Afficher le mot de passe</label>
                </div>
              </div>
              <div className='flex flex-col'>
                <label htmlFor='passwordConfirm' className='inter-medium'>
                  Confirmer votre mot de passe :
                </label>
                <input
                  type={showPassword2 ? 'text' : 'password'}
                  value={password2}
                  onChange={(e) => {
                    setPassword2(e.target.value);
                    setValidPassword2(true);
                  }}
                  name='passwordConfirm'
                  id='passwordConfirm'
                  required
                  className={`rounded-2xl drop-shadow-md w-128 py-1 pl-3 text-xl ${!validPassword2 && 'text-red'
                    }`}
                />
                <div className='flex flex-row gap-1 pl-4 mt-1'>
                  <input
                    type='checkbox'
                    checked={showPassword2}
                    onChange={togglePassword2Visibility}
                    name='afficherMdpConfirmation'
                    id='afficherMdpConfirmation'
                  />
                  <label htmlFor='afficherMdpConfirmation'>
                    Afficher le mot de passe
                  </label>
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
            <div className='flex flex-row items-center mt-5 justify-center'>
              <button
                className='px-10 py-1.5 bg-grey rounded-3xl text-white'
                onClick={validerMDP}
              >
                Confirmer
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgottenPassword;
