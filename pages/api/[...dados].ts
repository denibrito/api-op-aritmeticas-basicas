import type { NextApiRequest, NextApiResponse } from 'next'

export default function userHandler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { dados },
    method,
  } = req
  const operacao: string = dados[0];
  const numero1: number = +dados[1];
  const numero2: number = +dados[2];
  switch (method) {
    case 'GET':
      switch (operacao) {
        case 'soma':
          var resultado: number = numero1 + numero2;
          res.status(200).json({
            mensagem: `Operação de ${operacao} solicitada`,
            numero1: numero1,
            numero2: numero2,
            resultado: resultado
          })
        break
        case 'subtracao':
          var resultado: number = numero1 - numero2;
          res.status(200).json({
            mensagem: `Operação de ${operacao} solicitada`,
            numero1: numero1,
            numero2: numero2,
            resultado: resultado
          })
        break
        case 'multiplicacao':
          var resultado: number = numero1 * numero2;
          res.status(200).json({
            mensagem: `Operação de ${operacao} solicitada`,
            numero1: numero1,
            numero2: numero2,
            resultado: resultado
          })
        break
        case 'divisao':
          var resultado: number = numero1 / numero2;
          res.status(200).json({
            mensagem: `Operação de ${operacao} solicitada`,
            numero1: numero1,
            numero2: numero2,
            resultado: resultado
          })
        break
        default:
          res.setHeader('Allow', ['soma', 'subtracao', 'multiplicacao', 'divisao'])
          res.status(500).end(`Operacao ${operacao} nao suportada.\nTente soma, subtracao, multiplicacao ou divisao.`)
      }
      break
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Metodo ${method} nao suportado.`)
  }
}
