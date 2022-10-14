import { Envelope, Lock } from 'phosphor-react'
import Button from './components/Button'
import Checkbox from './components/Checkbox'
import Heading from './components/Heading'
import InputText, { Input } from './components/Input'
import Text from './components/Text'
import { ReactComponent as Logo } from './assets/svg/logo.svg'
import './styles/global.css'

function App() {
  return (
    <div className="w-screen h-screen flex flex-col bg-gray-900 items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <Logo />
        <Heading size="2xl">Ignite Lab</Heading>
        <Text size="lg" className="text-gray-400">Faça login e comece a usar!</Text>
      </header>

      <form className="flex flex-col items-stretch w-full max-w-sm mt-10">
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de e-mail</Text>
          <InputText>
            <Input.Icon icon={Envelope} />
            <Input.Input id="email" name="email" placeholder="Digite seu e-mail" type="email" />
          </InputText>
        </label>
        <label htmlFor="password" className="flex flex-col gap-3 mt-6">
          <Text className="font-semibold">Sua senha</Text>
          <InputText>
            <Input.Icon icon={Lock} />
            <Input.Input id="password" name="password" placeholder="********" type="password" />
          </InputText>
        </label>
        <Checkbox name="remember" className="mt-6">Lembrar de mim por 30 dias</Checkbox>
        <Button type="submit" className="mt-8">Fazer Login</Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text asChild size="sm">
          <a href="" className="text-gray-400 underline hover:text-gray-200">Esqueceu sua senha</a>
        </Text>
        <Text asChild size='sm'>
          <a href="" className="text-gray-400 underline hover:text-gray-200">Não possui conta? Crie uma agora!</a>
        </Text>
      </footer>
    </div>
  )
}

export default App
