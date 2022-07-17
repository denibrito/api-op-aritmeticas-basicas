# Aritmética Básica 📝
API Rest desenvolvida para retornar operações básicas de aritmética.

Exemplo de requisição [**NESTE LINK**](https://api-op-aritmeticas-basicas.vercel.app/api/soma/1/1).
## Informações do projeto:
> - Quatro operações básicas de aritmética
>   - Soma
>   - Subtração
>   - Multiplicação
>   - Divisão

## Como utilizar

Utilize o método GET passando a operação e os números desejados na operação através da URL/ EndPoint.

```bash
# EndPoint
url: /api/:operacao/:numero1/:numero2

# Exemplo de solicitação
url: /api/multiplicacao/35/49

# Exeplo de resposta
{
	"mensagem": "Operação de multiplicacao solicitada",
	"numero1": 35,
	"numero2": 49,
	"resultado": 1715
}
```


## Melhorias a serem aplicadas:
> Legenda | ✔️: Concluído | 🔄: Atualização confirmada | ⚠️: Atualização não confirmada
- 🔄 Adicionar método POST.

## Linguagens utilizadas:
<a href="#">
 <img align="left" width="40px" src="https://img.shields.io/badge/-241F31?logo=next.js" alt="DenilsonBrito-NextJS" />
</a>
<a href="https://www.typescriptlang.org/">
 <img align="left" width="40px" src="https://img.shields.io/badge/-241F31?logo=typescript" alt="DenilsonBrito-TypeScript" />
</a>
<a href="https://nodejs.org/pt-br/">
 <img align="left" width="40px" src="https://img.shields.io/badge/-241F31?logo=node.js" alt="DenilsonBrito-NodeJS" />
</a>
