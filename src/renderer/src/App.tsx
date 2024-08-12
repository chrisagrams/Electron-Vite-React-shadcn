import electronLogo from './assets/electron.svg' /* You can place assets, such as images, under renderer/src/assets and import them here */
import { Button } from '@renderer/components/ui/button' /* *Note* Make sure to use @renderer as alias!*/
import { useToast } from '@renderer/components/ui/use-toast'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@renderer/components/ui/dialog'

function App(): JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')
  const { toast } = useToast()

  return (
    <>
      <img alt="logo" src={electronLogo} width={100} height={100} />
      <h1 className="font-bold">Electron + Vite + React + TypeScript + shadcn/ui</h1>
      <Button variant="outline" onClick={ipcHandle}>
        Send IPC
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: 'Hello World!',
            description: 'This is an example toast!'
          })
        }}
      >
        Show Toast
      </Button>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Hello world!</DialogTitle>
            <DialogDescription>This is an example of a dialog. Hope you like it!</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default App
