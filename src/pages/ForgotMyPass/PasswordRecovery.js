import React, {Component} from "react";
import { View } from "react-native";
import * as Yup from 'yup';
import { Formik } from 'formik';
import Form from 'react-bootstrap/Form';
import { useHistory } from "react-router-dom";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .label('Email')
    .email('Por favor, entre um email válido')
    .required('Por favor entre um email registrado')
})

export default class passwordRecovery extends Component {

handlePasswordReset = async (values, actions) => {
    const { email } = values

    try {
      await this.props.firebase.passwordReset(email)
      console.log('Email de redefinição de senha enviado com sucesso')
      this.props.navigation.navigate('x') // x no caso é a tela de login, é necessário uma nova 
    } catch (error) {
      actions.setFieldError('general', error.message)
    }
  }

  render(){
    return (
      <View>
        <Text style={styles.text}>Esqueceu sua senha?</Text>
        <button onClick={this.handleGoBack()}>Voltar</button>

        <Form className = 'Email'>
          <Form.Control type="email" placeholder="Email" onChange={this.handleChangeEmail.bind(this)}/>
          <Form.Text className="text-muted">
            Enviaremos um link para a senha ser restaurada
          </Form.Text>
        </Form>

        <button>  {/*funções do botão precisam ser implementadas */}
          Próximo
        </button>
      </View>
    );
      
  }
    
}

/*
<Formik initialValues={{ email: '' }} onSubmit={(values, actions) => { this.handlePasswordReset(values, actions) }} validationSchema={validationSchema}>
  {({handleChange,values,handleSubmit,errors,isValid,touched,handleBlur,isSubmitting}) => (
  <Fragment>
    <Form name='email' value={values.email} onChangeText={handleChange('email')} placeholder='Email' autoCapitalize='none' />
    <ErrorMessage errorValue={touched.email && errors.email} />
    <View style={styles.buttonContainer}>
      <button buttonType='outline' onPress={handleSubmit} title='Enviar email'  />
    </View>
    <ErrorMessage errorValue={errors.general} />
  </Fragment>
)}
</Formik>

<Formik initialValues={{email:''}} onSubmit={(values, actions) => {this.handlePasswordReset(values,actions)}}