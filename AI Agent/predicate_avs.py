# predicate_avs.py

from sentence_transformers import SentenceTransformer, util
from rake_nltk import Rake  # For keyword extraction (optional)

class SummaryVerificationAVS:  # No inheritance from PredicateAVS
    def _init_(self, allowed_bias=0.2, similarity_threshold=0.6, min_summary_length=20):
        self.allowed_bias = allowed_bias
        self.similarity_threshold = similarity_threshold
        self.min_summary_length = min_summary_length
        self.model = SentenceTransformer('all-mpnet-base-v2')

    def verify(self, summary: str, original_abstract: str):  # No validator argument
        """Verifies the summary."""
        summary_length = len(summary.split())
        abstract_length = len(original_abstract.split())

        if summary_length < self.min_summary_length:
            raise ValueError("Summary is too short.")  # Use built-in ValueError

        if summary_length > abstract_length * (1 + self.allowed_bias):
            raise ValueError("Summary is too long (over-summarization).")

        similarity_score = self._calculate_semantic_similarity(summary, original_abstract)

        if similarity_score < self.similarity_threshold:
            raise ValueError("Summary does not capture the essence of the abstract.")

        # Optional: Keyword Check (uncomment if needed and install rake-nltk)
        # keywords_in_summary = self._extract_keywords(summary)
        # keywords_in_abstract = self._extract_keywords(original_abstract)
        # if not all(keyword in keywords_in_summary for keyword in keywords_in_abstract[:5]):
        #     raise ValueError("Summary is missing key concepts.")

        return True

    def _calculate_semantic_similarity(self, text1, text2):
        embeddings1 = self.model.encode(text1)
        embeddings2 = self.model.encode(text2)
        similarity = util.cos_sim(embeddings1, embeddings2)
        return similarity.item()

    def _extract_keywords(self, text):
        r = Rake()
        r.extract_keywords_from_text(text)
        return r.get_ranked_phrases()


# Example usage (for testing):
if _name_ == "_main_":
    avs = SummaryVerificationAVS()
    summary_text = "This is a test summary."  # Replace with your actual summary
    original_abstract_text = "This is the original abstract text for testing." # Replace with your actual abstract

    try:
        avs.verify(summary_text, original_abstract_text)  # Call verify
        print("Summary verified!")
    except ValueError as e:  # Catch ValueError
        print(f"Verification failed: {e}")