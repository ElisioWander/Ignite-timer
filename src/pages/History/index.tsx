import { useCycleContext } from '../../Context/CyclesContext'
import { HistoryContainer, HistoryList, Status } from './styles'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function History() {
  const { cycles } = useCycleContext()

  const cycleFormatted = cycles.map((cycle) => {
    return {
      id: cycle.id,
      taskName: cycle.task,
      minutes: cycle.minutesAmount,
      startDate: formatDistanceToNow(cycle.startDate, {
        addSuffix: true,
        locale: ptBR,
      }),
      finishedDate: cycle.finishedDate?.toString(),
      interruptedDate: cycle.interruptedDate?.toString(),
    }
  })

  return (
    <HistoryContainer>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycleFormatted.map((cycle) => (
              <tr key={cycle.id}>
                <td>{cycle.taskName}</td>
                <td>
                  {cycle.minutes > 1 ? cycle.minutes + ' minutos' : '1 minuto'}
                </td>
                <td>{cycle.startDate}</td>
                <td>
                  {cycle.finishedDate && (
                    <Status statusColor="green">Concluído</Status>
                  )}

                  {cycle.interruptedDate && (
                    <Status statusColor="red">Interrompido</Status>
                  )}

                  {!cycle.finishedDate && !cycle.interruptedDate && (
                    <Status statusColor="yellow">Em andamento</Status>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
