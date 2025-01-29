import IconDonations from "../../assets/donations.svg";
import IconDumbbell from "../../assets/dumbbell.svg";
import IconHappy from "../../assets/happy.svg";
import IconRunning from "../../assets/running.svg";

function Services() {
    return (
        <div id="servicos" style={{
            width: "100vw",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative"
        }}>
            <h2 style={{ margin: "75px 0", textAlign: "center", fontSize: "24px", fontWeight: "bold" }}>
                Conheça nossos serviços
            </h2>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "30px",
                width: "80%",
                flexWrap: "wrap",
                textAlign: "center",
                padding: "56px"
            }}>
                {[
                    { icon: IconHappy, label: "Bem-Estar", description: "Tenha uma vida mais saudável com a gente" },
                    { icon: IconDumbbell, label: "Treinamento", description: "Atinja seus objetivos com planejamento" },
                    { icon: IconDonations, label: "Apoio", description: "Busque sua melhor versão e autocuidado" },
                    { icon: IconRunning, label: "Corrida", description: "Seja ativo no seu tempo e disposição" }
                ].map((service, index) => (
                    <div key={index} style={{
                        width: "200px",
                        padding: "20px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "12px",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                        backgroundColor: "#f9f9f9"
                    }}>
                        <img src={service.icon} alt={service.label} style={{ width: "50px", height: "50px", marginBottom: "10px" }} />
                        <p style={{ fontSize: "16px", fontWeight: "bold", color: "#333" }}>{service.label}</p>
                        <p style={{ fontSize: "14px", color: "#555", textAlign: "center" }}>{service.description}</p>
                    </div>
                ))}
            </div>

            <div>
                <img
                    src="src/assets/homem.jpeg"
                    alt="Imagem ilustrativa de homem exercitando no chão"
                    className="w-full h-auto object-cover"
                />
            </div>

        </div>
    );
}

export default Services;
