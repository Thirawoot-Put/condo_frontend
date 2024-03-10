const bgClass = {
  blue: 'bg-sky-600 hover:bg-sky-700',
  green: 'bg-lime-500 hover:bg-lime-600',
  gray: 'bg-gray-200 hover:bg-gray-300',
  white: 'bg-white hover:bg-gray-200',
};

const colorClass = {
  white: 'text-white',
  black: 'text-black',
};

const widthClass = {
  full: 'w-full',
  half: 'w-1/2',
  oneThird: 'w-1/3',
};

export default function Button({
  children,
  bg,
  color,
  width,
  onClick,
  type = 'button',
}) {
  let classes = bg ? bgClass[bg] : '';
  classes += color ? ' ' + colorClass[color] : '';
  classes += width ? ' ' + widthClass[width] : '';
  return (
    <button
      className={` px-3 py-2 rounded-md ${classes}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}
