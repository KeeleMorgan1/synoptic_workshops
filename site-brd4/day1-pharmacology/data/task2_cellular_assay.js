window.TASK2_DATA = {
  "assay": "Cellular c-MYC suppression assay (MV4-11 cells, in-cell Western, normalised to total protein), 8-point concentration-response",
  "positive_control": "(+)-JQ1 (pan-BET tool compound, not part of the LO series; 1 uM positive control, expected suppression ~80-85%)",
  "note": "Concentration-response points for this task are constructed to be consistent with the summary MV4-11 IC50 values provided in the Workshop 2 screening data; all data in this simulation are fictional.",
  "concentrations_uM_labels": [
    "0.0001 µM",
    "0.001 µM",
    "0.003 µM",
    "0.01 µM",
    "0.03 µM",
    "0.1 µM",
    "1.0 µM",
    "10.0 µM"
  ],
  "compounds": [
    {
      "id": "JQ1-REF",
      "role": "Full inhibitor (assay positive control, not part of the LO series)",
      "series": "Reference",
      "response_pct": [
        0.0,
        0.1,
        1.1,
        5.8,
        11.7,
        28.3,
        82.6,
        97.3
      ]
    },
    {
      "id": "A02",
      "role": "Test compound",
      "series": "A",
      "response_pct": [
        0.2,
        5.9,
        15.8,
        39.9,
        65.7,
        86.0,
        96.9,
        97.8
      ]
    },
    {
      "id": "B07",
      "role": "Test compound",
      "series": "B",
      "response_pct": [
        0.5,
        2.7,
        0.3,
        0.4,
        2.9,
        3.1,
        38.3,
        87.4
      ]
    },
    {
      "id": "D18",
      "role": "Test compound",
      "series": "D",
      "response_pct": [
        2.0,
        2.3,
        8.7,
        22.8,
        47.9,
        72.0,
        97.8,
        96.6
      ]
    }
  ]
};
