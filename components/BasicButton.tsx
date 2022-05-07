import basicButtonStyles from '../styles/BasicButton.module.css'

interface BasicButtonProps {
  label: string
  onClick: () => void
  variant?: 'red'
}

const BasicButton = (props: BasicButtonProps) => {
  const { label, onClick, variant } = props

  return (
    <button
      onClick={onClick}
      className={basicButtonStyles.basic__btn + ` ${variant}`}
      style={{
        backgroundColor: `${variant === 'red' ? '#ef2e2e' : '#efad2e'}`
      }}
    >
      {label}
    </button>
  )
}

export default BasicButton
