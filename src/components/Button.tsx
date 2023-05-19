type ButtonProps = {
  type?: any;
  text: string;
};

export default function Button({ type, text }: ButtonProps) {
  function renderStyle(type: any) {
    switch (type) {
      case 'style-2':
        return 'bg-gradient-to-b from-pr-gradient-first to-pr-gradient-second py-[19px] hover:opacity-50';
      case 'style-3':
        return 'bg-gradient-to-b from-sr-gradient-first to-sr-gradient-second py-3.5 after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-white after:opacity-0 hover:after:opacity-50';
      default:
        return 'bg-pr-dark-purple desktop:py-3.5 hover:bg-pr-grayish-blue py-[11px] px-[24px]';
    }
  }
  return (
    <>
      <button
        className={`capitalize relative overflow-hidden transition-all font-bold px-8 text-[18px] leading-[28px] text-white rounded-full ${renderStyle(
          type
        )}`}
      >
        {text}
      </button>
    </>
  );
}
