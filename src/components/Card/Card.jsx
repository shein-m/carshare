const Card = () => {
  return (
    <li className="w-[274px] border border-red-500">
      <div className="flex justify-between">
        <div>
          <p className="text-neutral-900">
            Buick
            <span className="text-blue-500 "> Enclave</span>, 2008
          </p>
        </div>
        <div className="text-neutral-900">$40</div>
      </div>
    </li>
  );
};

export default Card;
