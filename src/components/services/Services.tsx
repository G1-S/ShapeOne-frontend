import React from 'react';
import IconDonations from "../../assets/donations.svg";
import IconDumbbell from "../../assets/dumbbell.svg";
import IconHappy from "../../assets/happy.svg";
import IconRunning from "../../assets/running.svg";

function Services() {
    return (
        <div style={{
            width: "100vw",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
            backgroundColor: "#fff"
        }}>
            <h2 style={{ margin: "40px 0", textAlign: "center", fontSize: "24px", fontWeight: "bold" }}>
                Conheça nossos serviços
            </h2>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "30px",
                width: "80%",
                flexWrap: "wrap",
                textAlign: "center"
            }}>
                {[
                    { icon: IconHappy, label: "Bem-Estar", description: "Promovemos o equilíbrio emocional e físico para uma vida mais saudável." },
                    { icon: IconDumbbell, label: "Treinamento", description: "Oferecemos suporte para atingir seus objetivos fitness." },
                    { icon: IconDonations, label: "Doações", description: "Apoiamos causas importantes por meio de doações solidárias." },
                    { icon: IconRunning, label: "Corrida", description: "Incentivamos a prática de corridas para melhorar sua saúde." }
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

            <img 
                src="src/assets/homem.jpeg" 
                alt="Imagem do Homem" 
                style={{
                    width: "100vw",
                    maxHeight: "400px", 
                    objectFit: "cover",  
                    marginTop: "40px"
                }}
            />
        </div>
    );
}

export default Services;
