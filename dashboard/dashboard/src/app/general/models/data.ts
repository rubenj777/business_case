export class Data {
  public abandonsPaniers: number;
  public conversionsCommandes: number;
  public conversionsPaniers: number;
  public endDate: Date;
  public montantTotalVentes: number;
  public nbCommandes: number;
  public nbPaniers: number;
  public nouveauxClients: number;
  public recurrence: number;
  public startDate: Date;
  public valeurPanierMoyen: number;

  constructor(
    abandonsPaniers: number,
    conversionsCommandes: number,
    conversionsPaniers: number,
    endDate: Date,
    montantTotalVentes: number,
    nbCommandes: number,
    nbPaniers: number,
    nouveauxClients: number,
    recurrence: number,
    startDate: Date,
    valeurPanierMoyen: number
  ) {
    this.abandonsPaniers = abandonsPaniers;
    this.conversionsCommandes = conversionsCommandes;
    this.conversionsPaniers = conversionsPaniers;
    this.endDate = endDate;
    this.montantTotalVentes = montantTotalVentes;
    this.nbCommandes = nbCommandes;
    this.nbPaniers = nbPaniers;
    this.nouveauxClients = nouveauxClients;
    this.recurrence = recurrence;
    this.startDate = startDate;
    this.valeurPanierMoyen = valeurPanierMoyen;
  }
}
