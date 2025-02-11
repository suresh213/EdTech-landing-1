import Careercomponentone from "./carrier-component1";
import CarrierComponentTwo from "./carrier-component2";
import CarrierComponentThree from "./carrier-component3";
import CareerComponentfour from "./carrier-component4";

export default function CareerTrack() {
  return (
    <div className="bg-[#111111] pt-11">
      {/* Header Section */}
      <div className="space-y-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">
          100% Job Assurance with{" "}
          <span className="text-red-500 border-b-2 border-red-500">
            Enormayu Career Track
          </span>
        </h1>
        <p className="text-zinc-400 max-w-3xl mx-auto">
          We have designed a dedicated career track along with career support
          services to help you become industry-ready and make sure you land your
          dream job!
        </p>
      </div>
      <Careercomponentone></Careercomponentone>
      <CarrierComponentTwo></CarrierComponentTwo>
      <CarrierComponentThree></CarrierComponentThree>
      <CareerComponentfour></CareerComponentfour>
    </div>
  );
}
