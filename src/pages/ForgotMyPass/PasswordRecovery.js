import React from "react";
import { useHistory } from "react-router-dom";

class passwordRecovery extends Component {
  
  constructor() {
    super();
    this.email = null
  }
  
  handleChangeEmail = (e) => {
    const email = e.target.value
    this.setState({
      email: this.email
    })
  }

  function handleGoBack() {
    let history = useHistory();
    history.goBack();
  }

  render(){
    return (
      <div>
        <h1>Estou no Esqueci minha senha</h1>
        <button onClick={handleGoBack()}>Voltar</button>
      </div>
          
      <form className = 'Email'>
        <Form.Control type="email" placeholder="Email" />
        <Form.Text className="text-muted">
          Enviaremos um link para a senha ser restaurada
        </Form.Text>
      </form>
      
      <button> /** funções do botão precisam ser implementadas */
        Próximo
      </button>
      );
    }
    
  }