import React from 'react'
import { socket } from '../../socket'

const ManageConnection = () => {
    const onConnect = () => {
      console.log('Conectado')
    }

    const onDisconnect = () => {
      console.log('Desconectado')
    }

    const handleConection = (con) => {

        switch (con) {
            case 'on':
                socket.on('connect', onConnect)
                break
            case 'off':
                socket.on('disconnect', onDisconnect)
                break
            default:
                break
        }
    }

  return (
    <div>
        <button onClick={() => handleConection('on')}>Connect</button>
        <button onClick={() => handleConection('off')}>Disconnect</button>
    </div>
  )
}

export default ManageConnection









// import React from 'react'

// function ManageConnection() {
//     const handleConnection = (con) => {
//         const onConnect = () => {
//             console.log("conectado");
//         }
//         const onDisconnect = () => {
//             console.log("desconectado");
//         }

//         switch (con) {
//             case 'on':
//                 socket.on('connect', onConnect)
//                 break;
//             case 'off':
//                 socket.on('connect', onConnect)
//         }
//                 default:
//     break;
// }
//         }
//     }

// return (
//     <div>
//         <button onClick={() => handleConnection('on')}>Connect</button>
//         <button onClick={() => handleConnection('off')}>Disconnect</button>
//     </div>
// )
// }

// export default ManageConnection
