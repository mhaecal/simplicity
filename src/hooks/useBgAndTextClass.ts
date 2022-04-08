// conditional purgeble classname
function useBgAndTextClass(color: string) {
  return {
    'bg-red-500 text-red-500': color === 'red',
    'bg-blue-500 text-blue-500': color === 'blue',
    'bg-yellow-500 text-yellow-500': color === 'yellow',
    'bg-green-500 text-green-500': color === 'green',
    'bg-purple-500 text-purple-500': color === 'purple',
    'bg-orange-500 text-orange-500': color === 'orange',
    'bg-gray-500 text-gray-500': color === 'gray',
    'bg-lime-500 text-lime-500': color === 'lime',
  }
}

export default useBgAndTextClass
