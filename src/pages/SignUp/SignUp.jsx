import './SignUp.css'

const SignUp = () => {

  const validacija = () => {
    let input = document.querySelector('#email');
    let value = input.value;

    // Provera da li value(string) sadrzi @ i .
    if (value.includes('@') && value.includes('.')) {
        let pozicijaAt = value.indexOf('@'); // Proveramo poziciju @
        let pozicijaTacka = value.indexOf('.'); // Proveramo poziciju .

        // Uzimamo vrednost izmedju pozicija @ i . i ne ukljucuje poslednju poziciju
        let izmedjuAtTacka = value.substring(pozicijaAt + 1, pozicijaTacka);

        // Da li izmedju . i @ ima vise od 0 karaktera
        if (izmedjuAtTacka.length > 0) {
            let preAt = value.substring(0, pozicijaAt); // Ispravljeno: uzimamo vrednost pre @

            // Proveravamo da li pre @ ima vise od 2 karaktera
            if (preAt.length > 2) {
                let posleTacke = value.substring(pozicijaTacka + 1); // Ispravljeno: uzimamo vrednost posle tacke

                // Proveravamo da li posle tacke ima vise od 1 karaktera
                if (posleTacke.length > 1) {
                    localStorage.setItem("#email");
                } else {
                    alert('Email nije validan');
                }
            } else {
                alert('Email mora da poseduje najmanje 2 karaktera pre @');
            }
        } else {
            alert('Email mora da poseduje izmedju @ i . najmanje 1 karakter');
        }
    } else {
        alert('Email mora da poseduje @ i . !!!');
    }
};


  return(
    <div className="SignUp-main">
     <div className="signUpCard">
        <h2>Sign Up</h2>
        <input name="email" id="email" type='email' placeholder='sebastian@gmail.com'/>
        <input type="username" placeholder="Type your username "  maxLength={20} minLength={8}/>
        <input type="password" placeholder="**********" maxLength={30} minLength={8}/>
        
        <div className="checkBox-div">
          <input type="checkbox" />
          <p>By logging in, you agree to our Privacy Policy and Terms of Service.
          We value your privacy and are committed to protecting your personal information.</p>
        </div>
        
         <button onClick={validacija} className='signUp-btn' >SignUp</button>
        </div>

    </div>
  )
}

export default SignUp