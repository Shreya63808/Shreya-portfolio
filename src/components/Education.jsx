export default function Education() {
  return (
    <section id="education" className="min-h-screen items-center px-10 md:px-20 bg-transparent flex py-20">

      <div className="w-full max-w-5xl space-y-8">

        <h2 className="text-5xl md:text-6xl font-bold text-primary drop-shadow-[0_0_10px_rgba(255,102,178,0.3)]">Education</h2>

        <div className="space-y-6 mt-12">
          {[
            { degree: "Master of Computer Applications (MCA) 2024 - 2026", institute: "Birla Global University, Odisha CGPA: 8.89" },
            { degree: "Bachelor of Science 2021 - 2024", institute: "Udayanath Autonomous College, Odisha Percentage: 78%" },
            { degree: "Adyant Higher Secondary (12th - Science) 2019- 2021", institute: "CHSE Board, Odisha Percentage: 72%.." }
          ].map((edu, i) => (
            <div key={i} className="group p-8 bg-[#161b22]/50 backdrop-blur-xl rounded-2xl border border-white/5 hover:border-primary/50 hover:bg-[#161b22]/80 transition-all duration-500 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-100 group-hover:text-primary transition-colors">{edu.degree}</h3>
              <p className="text-gray-400 mt-2 text-lg">{edu.institute}</p>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}